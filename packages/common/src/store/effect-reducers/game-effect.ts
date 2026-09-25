import { GameError } from '../../game-error';
import { GameMessage, GameLog } from '../../game-message';
import { EndTurnEffect } from '../effects/game-phase-effects';
import { Effect } from '../effects/effect';
import { State, GamePhase } from '../state/state';
import { StoreLike } from '../store-like';
import { StateUtils } from '../state-utils';
import { CheckPokemonTypeEffect, CheckPokemonStatsEffect,
  CheckProvidedEnergyEffect, CheckAttackCostEffect } from '../effects/check-effects';
import { Weakness, Resistance } from '../card/pokemon-types';
import { CardType, SpecialCondition, CardTag, prizeCountForTags } from '../card/card-types';
import { AttackEffect, UseAttackEffect, HealEffect, KnockOutEffect,
  UsePowerEffect, PowerEffect, UseStadiumEffect, EvolveEffect } from '../effects/game-effects';
import { CoinFlipPrompt } from '../prompts/coin-flip-prompt';
import { DealDamageEffect, ApplyWeaknessEffect } from '../effects/attack-effects';

function applyWeaknessAndResistance(
  damage: number,
  cardTypes: CardType[],
  weakness: Weakness[],
  resistance: Resistance[]
): number {
  let multiply = 1;
  let modifier = 0;

  for (const item of weakness) {
    if (cardTypes.includes(item.type)) {
      if (item.value === undefined) {
        multiply *= 2;
      } else {
        modifier += item.value;
      }
    }
  }

  for (const item of resistance) {
    if (cardTypes.includes(item.type)) {
      modifier += item.value;
    }
  }

  return (damage * multiply) + modifier;
}

/** Apply Ability/Tool/markers that modify incoming damage. */
function applyDamageReductionMarkers(target: { marker: { markers: { name: string }[] } }, damage: number): number {
  let reduced = 0;
  for (const m of target.marker.markers) {
    const match = /^REDUCE_DAMAGE_(\d+)$/.exec(m.name);
    if (match) {
      reduced += parseInt(match[1], 10);
    }
    if (m.name === 'PREVENT_EFFECTS' || m.name === 'PREVENT_DAMAGE') {
      return 0;
    }
  }
  return Math.max(0, damage - reduced);
}

/** PlusPower and similar attacker-side markers. */
function applyAttackBonusMarkers(source: { marker: { markers: { name: string }[] } }, damage: number): number {
  let bonus = 0;
  for (const m of source.marker.markers) {
    const match = /^PLUS_POWER_(\d+)$/.exec(m.name);
    if (match) {
      bonus += parseInt(match[1], 10);
    }
  }
  return damage + bonus;
}

function* useAttack(next: Function, store: StoreLike, state: State, effect: UseAttackEffect): IterableIterator<State> {
  const player = effect.player;
  const opponent = StateUtils.getOpponent(state, player);

  const sp = player.active.specialConditions;
  if (sp.includes(SpecialCondition.PARALYZED) || sp.includes(SpecialCondition.ASLEEP)) {
    throw new GameError(GameMessage.BLOCKED_BY_SPECIAL_CONDITION);
  }

  // "During your next turn, this Pokémon can't attack."
  if (player.active.marker.hasMarker('CANT_ATTACK')) {
    throw new GameError(GameMessage.BLOCKED_BY_EFFECT);
  }

  const attack = effect.attack;
  const checkAttackCost = new CheckAttackCostEffect(player, attack);
  state = store.reduceEffect(state, checkAttackCost);

  const checkProvidedEnergy = new CheckProvidedEnergyEffect(player);
  state = store.reduceEffect(state, checkProvidedEnergy);

  if (StateUtils.checkEnoughEnergy(checkProvidedEnergy.energyMap, checkAttackCost.cost) === false) {
    throw new GameError(GameMessage.NOT_ENOUGH_ENERGY);
  }

  if (sp.includes(SpecialCondition.CONFUSED)) {
    let flip = false;

    store.log(state, GameLog.LOG_FLIP_CONFUSION, { name: player.name });
    yield store.prompt(state, new CoinFlipPrompt(
      player.id,
      GameMessage.FLIP_CONFUSION),
    result => {
      flip = result;
      next();
    });

    if (flip === false) {
      store.log(state, GameLog.LOG_HURTS_ITSELF);
      player.active.damage += 30;
      state = store.reduceEffect(state, new EndTurnEffect(player));
      return state;
    }
  }

  store.log(state, GameLog.LOG_PLAYER_USES_ATTACK, { name: player.name, attack: attack.name });
  state.phase = GamePhase.ATTACK;
  const attackEffect = new AttackEffect(player, opponent, attack);
  state = store.reduceEffect(state, attackEffect);

  if (store.hasPrompts()) {
    yield store.waitPrompt(state, () => next());
  }

  if (attackEffect.damage > 0) {
    const dealDamage = new DealDamageEffect(attackEffect, attackEffect.damage);
    state = store.reduceEffect(state, dealDamage);
  }

  if (store.hasPrompts()) {
    yield store.waitPrompt(state, () => next());
  }

  return store.reduceEffect(state, new EndTurnEffect(player));
}

export function gameReducer(store: StoreLike, state: State, effect: Effect): State {

  if (effect instanceof KnockOutEffect) {
    const card = effect.target.getPokemonCard();
    if (card !== undefined) {

      // Multi-prize Pokemon (ex / EX / V / VMAX / VSTAR / GX / TAG TEAM / Mega)
      effect.prizeCount = prizeCountForTags(card.tags);

      // Fossil rule
      if (card.tags.includes(CardTag.FOSSIL) && state.rules.noPrizeForFossil) {
        effect.prizeCount = 0;
      }

      store.log(state, GameLog.LOG_POKEMON_KO, { name: card.name });
      effect.target.moveTo(effect.player.discard);
      effect.target.clearEffects();
    }
  }

  if (effect instanceof ApplyWeaknessEffect) {
    const checkPokemonType = new CheckPokemonTypeEffect(effect.source);
    state = store.reduceEffect(state, checkPokemonType);
    const checkPokemonStats = new CheckPokemonStatsEffect(effect.target);
    state = store.reduceEffect(state, checkPokemonStats);

    const cardType = checkPokemonType.cardTypes;
    const weakness = effect.ignoreWeakness ? [] : checkPokemonStats.weakness;
    const resistance = effect.ignoreResistance ? [] : checkPokemonStats.resistance;
    effect.damage = applyWeaknessAndResistance(effect.damage, cardType, weakness, resistance);
    // Attacker PlusPower-style markers
    effect.damage = applyAttackBonusMarkers(effect.source, effect.damage);
    // Defender Ability/Tool reduction / prevention markers
    effect.damage = applyDamageReductionMarkers(effect.target, effect.damage);
    return state;
  }

  if (effect instanceof UseAttackEffect) {
    const generator = useAttack(() => generator.next(), store, state, effect);
    return generator.next().value;
  }

  if (effect instanceof UsePowerEffect) {
    const player = effect.player;
    const power = effect.power;
    const card = effect.card;

    store.log(state, GameLog.LOG_PLAYER_USES_ABILITY, { name: player.name, ability: power.name });
    state = store.reduceEffect(state, new PowerEffect(player, power, card));
    return state;
  }

  if (effect instanceof UseStadiumEffect) {
    const player = effect.player;
    store.log(state, GameLog.LOG_PLAYER_USES_STADIUM, { name: player.name, stadium: effect.stadium.name });
    player.stadiumUsedTurn = state.turn;
  }

  if (effect instanceof HealEffect) {
    effect.target.damage = Math.max(0, effect.target.damage - effect.damage);
    return state;
  }

  if (effect instanceof EvolveEffect) {
    const pokemonCard = effect.target.getPokemonCard();
    if (pokemonCard === undefined) {
      throw new GameError(GameMessage.INVALID_TARGET);
    }
    if (effect.player.marker.hasMarker('NO_EVOLUTION')
      || effect.target.marker.hasMarker('NO_EVOLUTION')) {
      throw new GameError(GameMessage.ILLEGAL_ACTION);
    }
    store.log(state, GameLog.LOG_PLAYER_EVOLVES_POKEMON, {
      name: effect.player.name,
      pokemon: pokemonCard.name,
      card: effect.pokemonCard.name
    });
    effect.player.hand.moveCardTo(effect.pokemonCard, effect.target.pokemons);
    effect.target.pokemonPlayedTurn = state.turn;
    effect.target.clearEffects();
  }

  return state;
}
