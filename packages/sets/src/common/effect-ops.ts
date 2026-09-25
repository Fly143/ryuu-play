/**
 * Composable effect primitives used by generated / dynamic cards.
 * Each op mutates game state via the store Effect pipeline.
 */
import {
  AddSpecialConditionsEffect,
  AttackEffect,
  Card,
  ChooseCardsPrompt,
  CoinFlipPrompt,
  DealDamageEffect,
  EnergyCard,
  EnergyType,
  GameError,
  GameMessage,
  HealEffect,
  PlayerType,
  PokemonCard,
  PokemonSlot,
  PowerEffect,
  ShuffleDeckPrompt,
  SpecialCondition,
  Stage,
  State,
  StoreLike,
  SuperType,
  TrainerCard,
  TrainerEffect,
} from '@ptcg/common';

export type EffectOp = string;

function parseIntArg(op: string, index: number, fallback = 0): number {
  const parts = op.split(':');
  const raw = parts[index];
  const n = raw === undefined ? NaN : parseInt(raw, 10);
  return Number.isFinite(n) ? n : fallback;
}

function parseStrArg(op: string, index: number, fallback = ''): string {
  const parts = op.split(':');
  return parts[index] ?? fallback;
}

function mapCondition(name: string): SpecialCondition | undefined {
  switch (name.toUpperCase()) {
    case 'ASLEEP': return SpecialCondition.ASLEEP;
    case 'CONFUSED': case 'CONFUSION': return SpecialCondition.CONFUSED;
    case 'PARALYZED': case 'PARALYSIS': return SpecialCondition.PARALYZED;
    case 'POISONED': case 'POISON': return SpecialCondition.POISONED;
    case 'BURNED': case 'BURN': return SpecialCondition.BURNED;
    default: return undefined;
  }
}

function flipCoins(
  store: StoreLike,
  state: State,
  playerId: number,
  times: number,
  cb: (heads: number) => void,
): State {
  const prompts = Array.from(
    { length: Math.max(1, times) },
    () => new CoinFlipPrompt(playerId, GameMessage.COIN_FLIP),
  );
  return store.prompt(state, prompts, results => {
    const heads = (results || []).filter(Boolean).length;
    cb(heads);
  });
}

function forEachMyPokemon(
  player: { forEachPokemon: (pt: PlayerType, h: (slot: PokemonSlot) => void) => void },
  cb: (slot: PokemonSlot) => void,
): void {
  player.forEachPokemon(PlayerType.BOTTOM_PLAYER, slot => cb(slot));
}

/** Apply one attack-side effect op. Returns new state (may be prompt-driven). */
export function applyAttackOp(
  store: StoreLike,
  state: State,
  effect: AttackEffect,
  op: EffectOp,
): State {
  const player = effect.player;
  const name = parseStrArg(op, 0);

  switch (name) {
    case 'noop':
      return state;

    case 'ignoreWeaknessResistance': {
      effect.ignoreWeakness = true;
      effect.ignoreResistance = true;
      return state;
    }
    case 'ignoreWeakness': {
      effect.ignoreWeakness = true;
      return state;
    }
    case 'ignoreResistance': {
      effect.ignoreResistance = true;
      return state;
    }

    case 'draw': {
      const n = parseIntArg(op, 1, 1);
      player.deck.moveTo(player.hand, n);
      return state;
    }
    case 'selfDamage':
    case 'recoil': {
      const n = parseIntArg(op, 1, 0);
      const deal = new DealDamageEffect(effect, n);
      deal.target = player.active;
      return store.reduceEffect(state, deal);
    }
    case 'healSelf': {
      const n = parseIntArg(op, 1, 0);
      return store.reduceEffect(state, new HealEffect(player, player.active, n));
    }
    case 'healEachPokemon': {
      const n = parseIntArg(op, 1, 10);
      forEachMyPokemon(player, slot => {
        store.reduceEffect(state, new HealEffect(player, slot, n));
      });
      return state;
    }
    case 'flipHeadsSelfDamage':
    case 'flipTailsDamageSelf': {
      const n = parseIntArg(op, 1, 10);
      return flipCoins(store, state, player.id, 1, heads => {
        if (heads === 0) {
          const deal = new DealDamageEffect(effect, n);
          deal.target = player.active;
          store.reduceEffect(state, deal);
        }
      });
    }
    case 'flipHeadsDamage':
    case 'flipHeadsAddDamage': {
      const n = parseIntArg(op, 1, 0);
      return flipCoins(store, state, player.id, 1, heads => {
        if (heads > 0) {
          effect.damage += n;
        }
      });
    }
    case 'flipHeadsSpecial': {
      const cond = mapCondition(parseStrArg(op, 1, 'CONFUSED'));
      return flipCoins(store, state, player.id, 1, heads => {
        if (heads > 0 && cond !== undefined) {
          store.reduceEffect(state, new AddSpecialConditionsEffect(effect, [cond]));
        }
      });
    }
    case 'flipTimesDamage': {
      const times = parseIntArg(op, 1, 1);
      const dmg = parseIntArg(op, 2, 10);
      return flipCoins(store, state, player.id, times, heads => {
        effect.damage += dmg * heads;
      });
    }
    case 'specialDefending':
    case 'opponentActiveSpecial': {
      const cond = mapCondition(parseStrArg(op, 1, 'CONFUSED'));
      if (cond !== undefined) {
        return store.reduceEffect(state, new AddSpecialConditionsEffect(effect, [cond]));
      }
      return state;
    }
    case 'poisonDefending': {
      return store.reduceEffect(state, new AddSpecialConditionsEffect(effect, [SpecialCondition.POISONED]));
    }
    case 'specialBoth': {
      const cond = mapCondition(parseStrArg(op, 1, 'CONFUSED'));
      if (cond !== undefined) {
        store.reduceEffect(state, new AddSpecialConditionsEffect(effect, [cond]));
        const selfEffect = new AddSpecialConditionsEffect(effect, [cond]);
        selfEffect.target = player.active;
        store.reduceEffect(state, selfEffect);
      }
      return state;
    }
    case 'clearSpecialConditions': {
      player.active.specialConditions = [];
      return state;
    }
    case 'poisonBoth': {
      store.reduceEffect(state, new AddSpecialConditionsEffect(effect, [SpecialCondition.POISONED]));
      const selfEffect = new AddSpecialConditionsEffect(effect, [SpecialCondition.POISONED]);
      selfEffect.target = player.active;
      store.reduceEffect(state, selfEffect);
      return state;
    }
    case 'bonusDamagePer': {
      const per = parseIntArg(op, 1, 0);
      const count = parseIntArg(op, 2, 0);
      effect.damage += per * count;
      return state;
    }
    case 'bonusIfEnergyAttached': {
      const per = parseIntArg(op, 1, 10);
      if (player.active.energies.cards.length > 0) {
        effect.damage += per;
      }
      return state;
    }

    case 'discardEnergySelf': {
      const n = parseIntArg(op, 1, 1);
      const slot = player.active;
      const cards = slot.energies.cards.slice(-n);
      cards.forEach(c => slot.energies.moveCardTo(c, player.discard));
      return state;
    }
    case 'discardEnergyDefending': {
      const n = parseIntArg(op, 1, 1);
      const opp = effect.opponent;
      const slot = opp.active;
      const cards = slot.energies.cards.slice(-n);
      cards.forEach(c => slot.energies.moveCardTo(c, opp.discard));
      return state;
    }

    case 'searchBasicToBench': {
      const n = parseIntArg(op, 1, 1);
      const slots = player.bench.filter(b => b.pokemons.cards.length === 0);
      const max = Math.min(slots.length, n);
      if (player.deck.cards.length === 0 || max <= 0) {
        return state;
      }
      return store.prompt(
        state,
        new ChooseCardsPrompt(
          player.id,
          GameMessage.CHOOSE_CARD_TO_PUT_ONTO_BENCH,
          player.deck,
          { superType: SuperType.POKEMON, stage: Stage.BASIC },
          { min: 0, max, allowCancel: true },
        ),
        cards => {
          const selected = cards || [];
          selected.slice(0, slots.length).forEach((card, i) => {
            player.deck.moveCardTo(card, slots[i].pokemons);
            slots[i].pokemonPlayedTurn = state.turn;
          });
          store.prompt(state, new ShuffleDeckPrompt(player.id), order => {
            player.deck.applyOrder(order);
          });
        },
      );
    }
    case 'searchBasicToHand': {
      const n = parseIntArg(op, 1, 1);
      if (player.deck.cards.length === 0) {
        return state;
      }
      return store.prompt(
        state,
        new ChooseCardsPrompt(
          player.id,
          GameMessage.CHOOSE_CARD_TO_HAND,
          player.deck,
          { superType: SuperType.POKEMON, stage: Stage.BASIC },
          { min: 0, max: n, allowCancel: true },
        ),
        cards => {
          (cards || []).forEach(card => {
            player.deck.moveCardTo(card, player.hand);
          });
          store.prompt(state, new ShuffleDeckPrompt(player.id), order => {
            player.deck.applyOrder(order);
          });
        },
      );
    }
    case 'searchTrainerToHand': {
      const n = parseIntArg(op, 1, 1);
      if (player.deck.cards.length === 0) {
        return state;
      }
      return store.prompt(
        state,
        new ChooseCardsPrompt(
          player.id,
          GameMessage.CHOOSE_CARD_TO_HAND,
          player.deck,
          { superType: SuperType.TRAINER },
          { min: 0, max: n, allowCancel: true },
        ),
        cards => {
          (cards || []).forEach(card => {
            player.deck.moveCardTo(card, player.hand);
          });
          store.prompt(state, new ShuffleDeckPrompt(player.id), order => {
            player.deck.applyOrder(order);
          });
        },
      );
    }

    // Additional attack cost: discard N Energy from self (99 = all).
    case 'attackCost': {
      const n = parseIntArg(op, 1, 1);
      const slot = player.active;
      const energies = slot.energies.cards.slice(0, n);
      energies.forEach((c: EnergyCard) => slot.energies.moveCardTo(c, player.discard));
      return state;
    }
    case 'ignoreResistanceOnly':
    case 'continuousStatic':
      return state;

    case 'preventDamageNextTurn': {
      const opponent = effect.opponent;
      opponent.active.marker.addMarker('PREVENT_DAMAGE', effect.attack as any, state.turn + 1);
      return state;
    }
    case 'cantRetreatNextTurn': {
      const opponent = effect.opponent;
      opponent.active.marker.addMarker('CANT_RETREAT', effect.attack as any, state.turn + 1);
      return state;
    }
    case 'cantAttackNextTurn': {
      // "During your next turn, this Pokémon can't attack."
      player.active.marker.addMarker('CANT_ATTACK', effect.attack as any, state.turn + 2);
      return state;
    }
    case 'counterDamageWhenDamaged': {
      const n = parseIntArg(op, 1, 20);
      player.active.marker.addMarker('COUNTER_DAMAGE_' + n, effect.attack as any);
      return state;
    }
    case 'roughSkin': {
      player.active.marker.addMarker('ROUGH_SKIN', effect.attack as any);
      return state;
    }
    case 'noEvolution': {
      player.marker.addMarker('NO_EVOLUTION', effect.attack as any);
      return state;
    }
    case 'noTrainers': {
      player.marker.addMarker('NO_TRAINERS', effect.attack as any);
      return state;
    }
    case 'noPowers': {
      // Toxic Gas-like: ignore other powers (marker for future BlockAbility hooks)
      player.marker.addMarker('NO_POWERS', effect.attack as any);
      return state;
    }
    case 'bonusIfConfused': {
      const n = parseIntArg(op, 1, 30);
      if (player.active.specialConditions.includes(SpecialCondition.CONFUSED)) {
        effect.damage += n;
      }
      return state;
    }
    case 'koRevengePerEnergy': {
      // When KO'd by attack, flip and hit attacker per energy — marker + AfterKO hook later
      player.active.marker.addMarker('KO_REVENGE', effect.attack as any);
      return state;
    }
    case 'moreRetreatCostOpponent': {
      effect.opponent.active.marker.addMarker('CANT_RETREAT', effect.attack as any, state.turn + 1);
      return state;
    }
    case 'poisonPoint': {
      player.active.marker.addMarker('POISON_POINT', effect.attack as any);
      return state;
    }
    case 'reduceDamageNextTurn': {
      const n = parseIntArg(op, 1, 30);
      player.active.marker.addMarker('REDUCE_DAMAGE_' + n, effect.attack as any, state.turn + 2);
      return state;
    }
    case 'attachBasicFromDiscard': {
      const energy = player.discard.cards.find(
        (c: Card) => c instanceof EnergyCard && (c as EnergyCard).energyType === EnergyType.BASIC,
      ) as EnergyCard | undefined;
      if (energy) {
        player.discard.moveCardTo(energy, player.active.energies);
      }
      return state;
    }
    case 'searchAnyToHand': {
      const n = parseIntArg(op, 1, 1);
      if (player.deck.cards.length === 0) {
        return state;
      }
      return store.prompt(
        state,
        new ChooseCardsPrompt(
          player.id,
          GameMessage.CHOOSE_CARD_TO_HAND,
          player.deck,
          {},
          { min: 0, max: n, allowCancel: true },
        ),
        cards => {
          (cards || []).forEach(card => player.deck.moveCardTo(card, player.hand));
          store.prompt(state, new ShuffleDeckPrompt(player.id), order => {
            player.deck.applyOrder(order);
          });
        },
      );
    }
    case 'searchEnergyToSelf': {
      // Search deck for Basic Energy and attach to this Pokémon (active)
      if (player.deck.cards.length === 0) {
        return state;
      }
      return store.prompt(
        state,
        new ChooseCardsPrompt(
          player.id,
          GameMessage.CHOOSE_CARD_TO_ATTACH,
          player.deck,
          { superType: SuperType.ENERGY, energyType: EnergyType.BASIC },
          { min: 0, max: 1, allowCancel: true },
        ),
        cards => {
          (cards || []).forEach(card => {
            player.deck.moveCardTo(card, player.active.energies);
          });
          store.prompt(state, new ShuffleDeckPrompt(player.id), order => {
            player.deck.applyOrder(order);
          });
        },
      );
    }
    case 'searchEnergyToHand': {
      const n = parseIntArg(op, 1, 2);
      if (player.deck.cards.length === 0) {
        return state;
      }
      return store.prompt(
        state,
        new ChooseCardsPrompt(
          player.id,
          GameMessage.CHOOSE_CARD_TO_HAND,
          player.deck,
          { superType: SuperType.ENERGY, energyType: EnergyType.BASIC },
          { min: 0, max: n, allowCancel: true },
        ),
        cards => {
          (cards || []).forEach(card => player.deck.moveCardTo(card, player.hand));
          store.prompt(state, new ShuffleDeckPrompt(player.id), order => {
            player.deck.applyOrder(order);
          });
        },
      );
    }
    case 'cantAttackOpponentNextTurn': {
      const opponent = effect.opponent;
      opponent.active.marker.addMarker('CANT_ATTACK', effect.attack as any, state.turn + 1);
      return state;
    }
    case 'putCountersEachOpponent': {
      const n = parseIntArg(op, 1, 10);
      const opponent = effect.opponent;
      opponent.forEachPokemon(PlayerType.BOTTOM_PLAYER as any, slot => {
        slot.damage += n;
      });
      return state;
    }
    case 'millOpponent': {
      const n = parseIntArg(op, 1, 1);
      const opponent = effect.opponent;
      opponent.deck.moveTo(opponent.discard, n);
      return state;
    }
    case 'switchSelf': {
      const bench = player.bench.find(b => b.pokemons.cards.length > 0);
      if (bench) {
        player.switchPokemon(bench);
      }
      return state;
    }
    case 'switchSelfAfterAttack': {
      // "After your attack, you may switch X with 1 of your Benched Pokémon."
      const bench = player.bench.find(b => b.pokemons.cards.length > 0);
      if (bench) {
        player.switchPokemon(bench);
      }
      return state;
    }
    case 'bonusPerSelfDamageCounter': {
      // "Does N more damage for each damage counter on this Pokémon."
      const per = parseIntArg(op, 1, 10);
      const counters = Math.floor(player.active.damage / 10);
      effect.damage += per * counters;
      return state;
    }
    case 'bonusPerDefendingDamageCounter': {
      const per = parseIntArg(op, 1, 10);
      const counters = Math.floor(effect.opponent.active.damage / 10);
      effect.damage += per * counters;
      return state;
    }
    case 'healSelfAfterAttack': {
      // "After your attack, remove from X the number of damage counters equal to the damage you did"
      const n = parseIntArg(op, 1, 0) || effect.damage;
      return store.reduceEffect(state, new HealEffect(player, player.active, n));
    }
    case 'bonusPerEnergySelf': {
      const per = parseIntArg(op, 1, 10);
      effect.damage += per * player.active.energies.cards.length;
      return state;
    }
    case 'bonusPerEnergyDefending': {
      const per = parseIntArg(op, 1, 10);
      effect.damage += per * effect.opponent.active.energies.cards.length;
      return state;
    }
    case 'bonusPerEnergyBoth': {
      const per = parseIntArg(op, 1, 10);
      const n = player.active.energies.cards.length + effect.opponent.active.energies.cards.length;
      effect.damage += per * n;
      return state;
    }
    case 'bonusPerOwnBench': {
      const per = parseIntArg(op, 1, 20);
      const n = player.bench.filter(b => b.pokemons.cards.length > 0).length;
      effect.damage += per * n;
      return state;
    }
    case 'flipTailsBaseDamage': {
      const tails = parseIntArg(op, 1, 20);
      return flipCoins(store, state, player.id, 1, heads => {
        if (heads === 0) {
          effect.damage = tails;
        }
      });
    }
    case 'putCountersOnDefendingPerSelf': {
      const per = parseIntArg(op, 1, 10);
      const counters = Math.floor(player.active.damage / 10);
      effect.opponent.active.damage += per * counters;
      return state;
    }
    case 'damageTwoBench': {
      const dmg = parseIntArg(op, 1, 20);
      effect.opponent.bench.filter(b => b.pokemons.cards.length > 0).slice(0, 2).forEach(b => {
        b.damage += dmg;
      });
      return state;
    }
    case 'burnPlusFlipParalyze': {
      store.reduceEffect(state, new AddSpecialConditionsEffect(effect, [SpecialCondition.BURNED]));
      return flipCoins(store, state, player.id, 1, heads => {
        if (heads > 0) {
          store.reduceEffect(state, new AddSpecialConditionsEffect(effect, [SpecialCondition.PARALYZED]));
        }
      });
    }
    case 'energyTrans': {
      const from = player.active;
      const to = player.bench.find(b => b.pokemons.cards.length > 0);
      if (!to || from.energies.cards.length === 0) {
        return state;
      }
      const card = from.energies.cards[from.energies.cards.length - 1];
      from.energies.moveCardTo(card, to.energies);
      return state;
    }
    case 'bonusPerHand': {
      const per = parseIntArg(op, 1, 10);
      const opp = parseStrArg(op, 2, 'self') === 'opponent';
      const n = opp ? effect.opponent.hand.cards.length : player.hand.cards.length;
      effect.damage += per * n;
      return state;
    }
    case 'bonusPerPrize': {
      const per = parseIntArg(op, 1, 20);
      const side = parseStrArg(op, 2, 'taken'); // taken | opponentTaken | bothTaken
      const myTaken = 6 - player.getPrizeLeft();
      const oppTaken = 6 - effect.opponent.getPrizeLeft();
      let n = myTaken;
      if (side === 'opponent') n = oppTaken;
      else if (side === 'both') n = myTaken + oppTaken;
      effect.damage += per * n;
      return state;
    }
    case 'damageTimesHand': {
      const per = parseIntArg(op, 1, 10);
      const opp = parseStrArg(op, 2, 'self') === 'opponent';
      const n = opp ? effect.opponent.hand.cards.length : player.hand.cards.length;
      effect.damage = per * n;
      return state;
    }
    case 'damageTimesPrize': {
      const per = parseIntArg(op, 1, 20);
      const side = parseStrArg(op, 2, 'taken');
      const myTaken = 6 - player.getPrizeLeft();
      const oppTaken = 6 - effect.opponent.getPrizeLeft();
      let n = myTaken;
      if (side === 'opponent') n = oppTaken;
      else if (side === 'both') n = myTaken + oppTaken;
      effect.damage = per * n;
      return state;
    }
    case 'bonusPerOpponentBench': {
      const per = parseIntArg(op, 1, 10);
      const n = effect.opponent.bench.filter(b => b.pokemons.cards.length > 0).length;
      effect.damage += per * n;
      return state;
    }
    case 'damageTimesOpponentBench': {
      const per = parseIntArg(op, 1, 10);
      const n = effect.opponent.bench.filter(b => b.pokemons.cards.length > 0).length;
      effect.damage = per * n;
      return state;
    }
    case 'damageTimesPokemonInPlay': {
      const per = parseIntArg(op, 1, 10);
      let n = 0;
      player.forEachPokemon(PlayerType.BOTTOM_PLAYER as any, () => n++);
      effect.opponent.forEachPokemon(PlayerType.BOTTOM_PLAYER as any, () => n++);
      effect.damage = per * n;
      return state;
    }
    case 'damageTimesSpecialConditions': {
      const per = parseIntArg(op, 1, 50);
      effect.damage = per * effect.opponent.active.specialConditions.length;
      return state;
    }
    case 'bonusPerSpecialConditions': {
      const per = parseIntArg(op, 1, 50);
      effect.damage += per * effect.opponent.active.specialConditions.length;
      return state;
    }
    case 'spreadBothBench': {
      const dmg = parseIntArg(op, 1, 10);
      [...player.bench, ...effect.opponent.bench]
        .filter(b => b.pokemons.cards.length > 0)
        .forEach(b => { b.damage += dmg; });
      return state;
    }
    case 'spreadAllOpponent': {
      const dmg = parseIntArg(op, 1, 10);
      effect.opponent.forEachPokemon(PlayerType.BOTTOM_PLAYER as any, slot => {
        slot.damage += dmg;
      });
      return state;
    }
    case 'spreadAllMine': {
      const dmg = parseIntArg(op, 1, 10);
      player.forEachPokemon(PlayerType.BOTTOM_PLAYER as any, slot => {
        slot.damage += dmg;
      });
      return state;
    }
    case 'damageTimesEnergySelf': {
      const per = parseIntArg(op, 1, 20);
      effect.damage = per * player.active.energies.cards.length;
      return state;
    }
    case 'damageTimesEnergyDefending': {
      const per = parseIntArg(op, 1, 20);
      effect.damage = per * effect.opponent.active.energies.cards.length;
      return state;
    }
    case 'damageTimesEnergyBoth': {
      const per = parseIntArg(op, 1, 20);
      effect.damage = per * (player.active.energies.cards.length + effect.opponent.active.energies.cards.length);
      return state;
    }
    case 'minusPerEnergyDefending': {
      const per = parseIntArg(op, 1, 10);
      effect.damage = Math.max(0, effect.damage - per * effect.opponent.active.energies.cards.length);
      return state;
    }
    case 'bonusPerDamagedBench': {
      const per = parseIntArg(op, 1, 20);
      const n = player.bench.filter(b => b.pokemons.cards.length > 0 && b.damage > 0).length;
      effect.damage += per * n;
      return state;
    }
    case 'damageTimesDiscardPokemon': {
      const per = parseIntArg(op, 1, 20);
      const n = player.discard.cards.filter((c: any) => c.superType === SuperType.POKEMON).length;
      effect.damage = per * n;
      return state;
    }
    case 'minusPerHand': {
      const per = parseIntArg(op, 1, 10);
      effect.damage = Math.max(0, effect.damage - per * player.hand.cards.length);
      return state;
    }
    case 'discardRandomOpponentHand': {
      const n = parseIntArg(op, 1, 1);
      const opp = effect.opponent;
      opp.hand.moveTo(opp.discard, Math.min(n, opp.hand.cards.length));
      return state;
    }
    case 'discardFromHand': {
      const n = parseIntArg(op, 1, 1);
      player.hand.moveTo(player.discard, Math.min(n, player.hand.cards.length));
      return state;
    }
    case 'moveDamageCounters': {
      // simplified: move up to 3 counters from self to defending
      const n = Math.min(30, player.active.damage);
      player.active.damage -= n;
      effect.opponent.active.damage += n;
      return state;
    }
    case 'putDamageCounters': {
      const n = parseIntArg(op, 1, 10);
      effect.opponent.active.damage += n;
      return state;
    }
    case 'oncePerTurnSearch': {
      return applyAttackOp(store, state, effect, 'searchAnyToHand:1');
    }
    case 'bothDraw': {
      const n = parseIntArg(op, 1, 3);
      for (const p of state.players) {
        p.deck.moveTo(p.hand, n);
      }
      return state;
    }
    case 'oncePerTurnHeal': {
      const n = parseIntArg(op, 1, 20);
      return store.reduceEffect(state, new HealEffect(player, player.active, n));
    }
    case 'oncePerTurnAttachFromHand': {
      const energy = player.hand.cards.find(
        (c: Card) => c instanceof EnergyCard,
      ) as EnergyCard | undefined;
      if (energy) {
        player.hand.moveCardTo(energy, player.active.energies);
      }
      return state;
    }
    case 'attachBasicFromHandToBench': {
      const n = parseIntArg(op, 1, 1);
      const slots = player.bench.filter(b => b.pokemons.cards.length > 0);
      const energies = player.hand.cards
        .filter((c: Card) => c instanceof EnergyCard && (c as EnergyCard).energyType === EnergyType.BASIC)
        .slice(0, n * Math.max(1, slots.length)) as EnergyCard[];
      energies.forEach((c, i) => {
        const slot = slots[i % Math.max(1, slots.length)];
        if (slot) {
          player.hand.moveCardTo(c, slot.energies);
        }
      });
      return state;
    }
    case 'plusPrize': {
      const n = parseIntArg(op, 1, 1);
      player.active.marker.addMarker('PLUS_PRIZE_' + n, effect.attack as any, state.turn + 1);
      return state;
    }
    case 'discardStadium': {
      for (const p of state.players) {
        if (p.stadium.cards.length > 0) {
          p.stadium.moveTo(p.discard);
        }
      }
      return state;
    }
    case 'discardOpponentTools': {
      const opponent = effect.opponent;
      opponent.forEachPokemon(PlayerType.BOTTOM_PLAYER as any, slot => {
        slot.trainers.cards.slice().forEach((c: any) => slot.trainers.moveCardTo(c, opponent.discard));
      });
      return state;
    }
    case 'scoopUpOpponent': {
      const opponent = effect.opponent;
      const slot = opponent.active;
      const toDeck: Card[] = [];
      slot.energies.cards.forEach(c => toDeck.push(c));
      slot.trainers.cards.forEach(c => toDeck.push(c));
      slot.pokemons.cards.forEach(c => toDeck.push(c));
      slot.energies.cards = [];
      slot.trainers.cards = [];
      slot.pokemons.cards = [];
      slot.damage = 0;
      slot.specialConditions = [];
      toDeck.forEach(c => opponent.deck.cards.push(c as any));
      const bench = opponent.bench.find(b => b.pokemons.cards.length > 0);
      if (bench) {
        opponent.switchPokemon(bench);
      }
      return store.prompt(state, new ShuffleDeckPrompt(opponent.id), order => {
        opponent.deck.applyOrder(order);
      });
    }
    case 'shuffleBenchToDeck': {
      const slot = player.bench.find(b => b.pokemons.cards.length > 0);
      if (!slot) {
        return state;
      }
      const toDeck: Card[] = [];
      slot.energies.cards.forEach(c => toDeck.push(c));
      slot.trainers.cards.forEach(c => toDeck.push(c));
      slot.pokemons.cards.forEach(c => toDeck.push(c));
      slot.energies.cards = [];
      slot.trainers.cards = [];
      slot.pokemons.cards = [];
      slot.damage = 0;
      toDeck.forEach(c => player.deck.cards.push(c as any));
      return store.prompt(state, new ShuffleDeckPrompt(player.id), order => {
        player.deck.applyOrder(order);
      });
    }
    case 'flipHeadsDrawOrOne': {
      return flipCoins(store, state, player.id, 1, heads => {
        player.deck.moveTo(player.hand, heads > 0 ? 8 : 1);
      });
    }
    case 'flipHeadsTopDiscardToDeck': {
      return flipCoins(store, state, player.id, 1, heads => {
        if (heads > 0 && player.discard.cards.length > 0) {
          const c = player.discard.cards[0];
          player.discard.moveCardTo(c, player.deck);
          player.deck.cards.unshift(c as any);
        }
      });
    }
    case 'healBench': {
      const n = parseIntArg(op, 1, 20);
      const slot = player.bench.find(b => b.pokemons.cards.length > 0 && b.damage > 0);
      if (slot) {
        store.reduceEffect(state, new HealEffect(player, slot, n));
      }
      return state;
    }
    case 'moveEnergyFromBenchToSelf': {
      const from = player.bench.find(b => b.energies.cards.length > 0);
      if (from) {
        const card = from.energies.cards[from.energies.cards.length - 1];
        from.energies.moveCardTo(card, player.active.energies);
      }
      return state;
    }
    case 'moveAllEnergyToBench': {
      const to = player.bench.find(b => b.pokemons.cards.length > 0);
      if (to) {
        player.active.energies.cards.slice().forEach((c: EnergyCard) => {
          player.active.energies.moveCardTo(c, to.energies);
        });
      }
      return state;
    }
    case 'specialBothAsleep': {
      store.reduceEffect(state, new AddSpecialConditionsEffect(effect, [SpecialCondition.ASLEEP]));
      const selfEffect = new AddSpecialConditionsEffect(effect, [SpecialCondition.ASLEEP]);
      selfEffect.target = player.active;
      store.reduceEffect(state, selfEffect);
      return state;
    }
    case 'specialBothConfused': {
      store.reduceEffect(state, new AddSpecialConditionsEffect(effect, [SpecialCondition.CONFUSED]));
      const selfEffect = new AddSpecialConditionsEffect(effect, [SpecialCondition.CONFUSED]);
      selfEffect.target = player.active;
      store.reduceEffect(state, selfEffect);
      return state;
    }
    case 'baseDamageIfLowHP': {
      const base = parseIntArg(op, 1, 50);
      const threshold = parseIntArg(op, 2, 50);
      const card = player.active.getPokemonCard();
      const remaining = card ? card.hp - player.active.damage : 999;
      if (remaining <= threshold) {
        effect.damage = base;
      }
      return state;
    }
    case 'minusPerRetreatCostColorless': {
      const per = parseIntArg(op, 1, 20);
      const card = effect.opponent.active.getPokemonCard();
      const cost = card ? card.retreat.length : 0;
      effect.damage = Math.max(0, effect.damage - per * cost);
      return state;
    }
    case 'healPerEnergySelf': {
      const per = parseIntArg(op, 1, 20);
      const n = per * player.active.energies.cards.length;
      return store.reduceEffect(state, new HealEffect(player, player.active, n));
    }
    case 'drawPerEnergySelf': {
      const per = parseIntArg(op, 1, 1);
      player.deck.moveTo(player.hand, per * player.active.energies.cards.length);
      return state;
    }
    case 'damageDamagedOpponent': {
      const dmg = parseIntArg(op, 1, 50);
      const t = effect.opponent.bench.find(b => b.pokemons.cards.length > 0 && b.damage > 0)
        || (effect.opponent.active.damage > 0 ? effect.opponent.active : undefined);
      if (t) {
        t.damage += dmg;
      }
      return state;
    }
    case 'attachBasicFromDiscardToBench': {
      const n = parseIntArg(op, 1, 1);
      const slots = player.bench.filter(b => b.pokemons.cards.length > 0);
      const energy = player.discard.cards
        .filter((c: Card) => c instanceof EnergyCard)
        .slice(0, n * Math.max(1, slots.length)) as EnergyCard[];
      energy.forEach((c, i) => {
        const slot = slots[i % Math.max(1, slots.length)];
        if (slot) {
          player.discard.moveCardTo(c, slot.energies);
        }
      });
      return state;
    }
    case 'discardOpponentHand': {
      const n = parseIntArg(op, 1, 1);
      const opp = effect.opponent;
      opp.hand.moveTo(opp.discard, Math.min(n, opp.hand.cards.length));
      return state;
    }
    case 'halfDamageTaken': {
      player.active.marker.addMarker('REDUCE_DAMAGE_HALF', effect.attack as any, state.turn + 1);
      return state;
    }
    case 'bonusNamedAttack': {
      // "During your next turn, X's Y attack does N more damage"
      const n = parseIntArg(op, 1, 40);
      player.active.marker.addMarker('PLUS_POWER_' + n, effect.attack as any, state.turn + 2);
      return state;
    }
    case 'spreadTwoBench': {
      const dmg = parseIntArg(op, 1, 40);
      effect.opponent.bench.filter(b => b.pokemons.cards.length > 0).slice(0, 2).forEach(b => {
        b.damage += dmg;
      });
      return state;
    }
    case 'discardToolsDefending': {
      const opp = effect.opponent;
      opp.active.trainers.cards.slice().forEach((c: any) => opp.active.trainers.moveCardTo(c, opp.discard));
      return state;
    }
    case 'millSelf': {
      const n = parseIntArg(op, 1, 1);
      player.deck.moveTo(player.discard, n);
      return state;
    }
    case 'moveDamageBenchToDefending': {
      const from = player.bench.find(b => b.damage > 0);
      if (from) {
        const n = from.damage;
        from.damage = 0;
        effect.opponent.active.damage += n;
      }
      return state;
    }
    case 'swapDamageCounters': {
      const a = player.active.damage;
      const b = effect.opponent.active.damage;
      player.active.damage = b;
      effect.opponent.active.damage = a;
      return state;
    }
    case 'preventDamageIfUnder': {
      // Threshold is encoded for future use; currently prevent all damage next turn
      player.active.marker.addMarker('PREVENT_DAMAGE', effect.attack as any, state.turn + 1);
      return state;
    }
    case 'bonusPerOpponentBenchTimes': {
      const per = parseIntArg(op, 1, 20);
      const n = effect.opponent.bench.filter(b => b.pokemons.cards.length > 0).length;
      effect.damage += per * n;
      return state;
    }
    case 'damageTimesRetreatColorless': {
      const per = parseIntArg(op, 1, 20);
      const card = effect.opponent.active.getPokemonCard();
      effect.damage = per * (card ? card.retreat.length : 0);
      return state;
    }
    case 'bonusPerRetreatCostColorless': {
      const per = parseIntArg(op, 1, 10);
      const card = effect.opponent.active.getPokemonCard();
      effect.damage += per * (card ? card.retreat.length : 0);
      return state;
    }
    case 'bonusPerDamagedBenchAll': {
      const per = parseIntArg(op, 1, 10);
      const n = [...player.bench, ...effect.opponent.bench]
        .filter(b => b.pokemons.cards.length > 0 && b.damage > 0)
        .reduce((s, b) => s + Math.floor(b.damage / 10), 0);
      effect.damage += per * n;
      return state;
    }
    case 'noWeaknessNextTurn': {
      player.active.marker.addMarker('PREVENT_EFFECTS', effect.attack as any, state.turn + 1);
      return state;
    }
    case 'millThenHitBench': {
      const mill = parseIntArg(op, 1, 5);
      const hit = parseIntArg(op, 2, 50);
      player.deck.moveTo(player.discard, mill);
      effect.opponent.bench.filter(b => b.pokemons.cards.length > 0).slice(0, 2).forEach(b => {
        b.damage += hit;
      });
      return state;
    }
    case 'damageOwnBench': {
      const dmg = parseIntArg(op, 1, 20);
      const b = player.bench.find(x => x.pokemons.cards.length > 0);
      if (b) {
        b.damage += dmg;
      }
      return state;
    }
    case 'cantAttackIfEx': {
      effect.opponent.active.marker.addMarker('CANT_ATTACK', effect.attack as any, state.turn + 1);
      return state;
    }
    case 'shuffleOpponentDeck': {
      const opponent = effect.opponent;
      return store.prompt(state, new ShuffleDeckPrompt(opponent.id), order => {
        opponent.deck.applyOrder(order);
      });
    }
    case 'recoverEnergyToSelf': {
      const n = parseIntArg(op, 1, 2);
      const picked = player.discard.cards
        .filter((c: Card) => c instanceof EnergyCard)
        .slice(0, n) as EnergyCard[];
      picked.forEach(c => player.discard.moveCardTo(c, player.active.energies));
      return state;
    }
    case 'damageHalfHP': {
      const card = effect.opponent.active.getPokemonCard();
      const half = card ? Math.ceil(card.hp / 2 / 10) * 10 : 50;
      effect.damage = half;
      return state;
    }
    case 'gxOncePerGame': {
      const marker = 'GX_USED';
      if (player.marker.hasMarker(marker)) {
        throw new GameError(GameMessage.BLOCKED_BY_EFFECT);
      }
      player.marker.addMarker(marker, effect.attack as any);
      return state;
    }
    case 'ascension': {
      // Search deck for evolution of this and put onto this Pokémon (simplified: to hand)
      if (player.deck.cards.length === 0) {
        return state;
      }
      return store.prompt(
        state,
        new ChooseCardsPrompt(
          player.id,
          GameMessage.CHOOSE_CARD_TO_EVOLVE,
          player.deck,
          { superType: SuperType.POKEMON },
          { min: 0, max: 1, allowCancel: true },
        ),
        cards => {
          (cards || []).forEach(card => {
            player.deck.moveCardTo(card, player.active.pokemons);
          });
          store.prompt(state, new ShuffleDeckPrompt(player.id), order => {
            player.deck.applyOrder(order);
          });
        },
      );
    }
    case 'noRetreatCost': {
      player.active.marker.addMarker('ZERO_RETREAT', effect.attack as any, state.turn + 2);
      return state;
    }
    case 'flipHeadsDraw': {
      const n = parseIntArg(op, 1, 1);
      return flipCoins(store, state, player.id, 1, heads => {
        if (heads > 0) {
          player.deck.moveTo(player.hand, n);
        }
      });
    }
    case 'fossilBody': {
      return state;
    }
    case 'bonusPerSelfDamageCounter': {
      const per = parseIntArg(op, 1, 10);
      const counters = Math.floor(player.active.damage / 10);
      effect.damage += per * counters;
      return state;
    }
    case 'damageTimesSelfCounters': {
      // "Does 10 damage times the number of damage counters on X"
      const per = parseIntArg(op, 1, 10);
      const counters = Math.floor(player.active.damage / 10);
      effect.damage = per * counters;
      return state;
    }
    case 'healHalfDamageDone': {
      const n = Math.floor(effect.damage / 2);
      return store.reduceEffect(state, new HealEffect(player, player.active, n));
    }
    case 'opponentCantTrainers': {
      const opponent = effect.opponent;
      opponent.marker.addMarker('CANT_TRAINERS', effect.attack as any, state.turn + 1);
      return state;
    }
    case 'spreadBenchDamage': {
      // approximate: put N damage on first 3 opponent bench (UI would choose)
      const dmg = parseIntArg(op, 1, 10);
      const count = parseIntArg(op, 2, 3);
      effect.opponent.bench.filter(b => b.pokemons.cards.length > 0).slice(0, count).forEach(b => {
        b.damage += dmg;
      });
      return state;
    }
    case 'damageOneBench': {
      const dmg = parseIntArg(op, 1, 10);
      const b = effect.opponent.bench.find(x => x.pokemons.cards.length > 0);
      if (b) {
        b.damage += dmg;
      }
      return state;
    }
    case 'flipHeadsSelfSpecial':
    case 'flipTailsSpecial': {
      const cond = mapCondition(parseStrArg(op, 1, 'CONFUSED'));
      return flipCoins(store, state, player.id, 1, heads => {
        const trigger = name === 'flipTailsSpecial' ? heads === 0 : heads > 0;
        if (trigger && cond !== undefined) {
          const selfEffect = new AddSpecialConditionsEffect(effect, [cond]);
          selfEffect.target = player.active;
          store.reduceEffect(state, selfEffect);
        }
      });
    }
    case 'rareCandy': {
      return state; // evolution timing — engine rare-candy primitive used by hand-written cards
    }
    case 'pokemonTrader': {
      return applyAttackOp(store, state, effect, 'searchAnyToHand:1');
    }
    case 'scoopUpSelf': {
      const slot = player.active;
      const toHand: Card[] = [];
      slot.energies.cards.forEach(c => toHand.push(c));
      slot.trainers.cards.forEach(c => toHand.push(c));
      slot.pokemons.cards.forEach(c => toHand.push(c));
      slot.energies.cards = [];
      slot.trainers.cards = [];
      slot.pokemons.cards = [];
      slot.damage = 0;
      slot.specialConditions = [];
      toHand.forEach(c => (player.hand as any).cards.push(c));
      const bench = player.bench.find(b => b.pokemons.cards.length > 0);
      if (bench) {
        player.switchPokemon(bench);
      }
      return state;
    }
    case 'pokemonCenter': {
      forEachMyPokemon(player, slot => {
        store.reduceEffect(state, new HealEffect(player, slot, 999));
        slot.energies.cards.slice().forEach((c: EnergyCard) => slot.energies.moveCardTo(c, player.discard));
      });
      return state;
    }
    case 'pokemonFlute': {
      return applyAttackOp(store, state, effect, 'recoverFromDiscardToBench');
    }
    case 'pokedex': {
      return state; // reorder top of deck — needs OrderCardsPrompt
    }
    case 'lassShuffleTrainers': {
      for (const p of state.players) {
        const trainers = p.hand.cards.filter((c: any) => c.superType === SuperType.TRAINER);
        trainers.forEach(c => p.hand.moveCardTo(c as any, p.deck));
      }
      return store.prompt(state, new ShuffleDeckPrompt(player.id), order => {
        player.deck.applyOrder(order);
      });
    }
    case 'gustOpponent': {
      const opponent = effect.opponent;
      const bench = opponent.bench.find(b => b.pokemons.cards.length > 0);
      if (bench) {
        opponent.switchPokemon(bench);
      }
      return state;
    }
    case 'ignoreAllEffects': {
      effect.ignoreWeakness = true;
      effect.ignoreResistance = true;
      return state;
    }
    case 'flipUntilTailsTimes': {
      const dmg = parseIntArg(op, 1, 10);
      return flipCoins(store, state, player.id, 8, heads => {
        effect.damage += dmg * heads;
      });
    }
    case 'drawUntilHand': {
      const n = parseIntArg(op, 1, 6);
      const need = Math.max(0, n - player.hand.cards.length);
      player.deck.moveTo(player.hand, need);
      return state;
    }
    case 'preventEffectsNextTurn': {
      player.active.marker.addMarker('PREVENT_EFFECTS', effect.attack as any, state.turn + 2);
      return state;
    }
    case 'recoverFromDiscard': {
      // Put a card from discard into hand (Pokemon/Trainer/any approximated as any)
      const n = parseIntArg(op, 1, 1);
      if (player.discard.cards.length === 0) {
        return state;
      }
      return store.prompt(
        state,
        new ChooseCardsPrompt(
          player.id,
          GameMessage.CHOOSE_CARD_TO_HAND,
          player.discard,
          {},
          { min: 0, max: n, allowCancel: true },
        ),
        cards => {
          (cards || []).forEach(card => player.discard.moveCardTo(card, player.hand));
        },
      );
    }
    case 'recoverFromDiscardToBench': {
      if (player.discard.cards.length === 0) {
        return state;
      }
      const slots = player.bench.filter(b => b.pokemons.cards.length === 0);
      if (slots.length === 0) {
        return state;
      }
      return store.prompt(
        state,
        new ChooseCardsPrompt(
          player.id,
          GameMessage.CHOOSE_CARD_TO_PUT_ONTO_BENCH,
          player.discard,
          { superType: SuperType.POKEMON },
          { min: 0, max: 1, allowCancel: true },
        ),
        cards => {
          (cards || []).slice(0, 1).forEach(card => {
            player.discard.moveCardTo(card, slots[0].pokemons);
            slots[0].pokemonPlayedTurn = state.turn;
          });
        },
      );
    }
    case 'selfReduceDamageNextTurn': {
      const n = parseIntArg(op, 1, 20);
      player.active.marker.addMarker('REDUCE_DAMAGE_' + n, effect.attack as any, state.turn + 1);
      return state;
    }
    case 'opponentShuffleDraw': {
      const n = parseIntArg(op, 1, 7);
      const opponent = effect.opponent;
      opponent.hand.moveTo(opponent.deck, opponent.hand.cards.length);
      return store.prompt(state, new ShuffleDeckPrompt(opponent.id), order => {
        opponent.deck.applyOrder(order);
        opponent.deck.moveTo(opponent.hand, n);
      });
    }
    case 'bonusDamageMinusPer': {
      // "N damage minus M for each damage counter" — approximate with base only (count unknown)
      return state;
    }
    case 'attackGate': {
      // "You can't use this attack unless ..." — structural, engine doesn't pre-check
      return state;
    }
    case 'metronome':
    case 'copyAttack':
    case 'devolve':
    case 'swapDamageCounters':
    case 'spreadBenchDamage':
      return state; // complex — structural for now

    default:
      return state;
  }
}

/** Apply one trainer-side effect op. */
export function applyTrainerOp(
  store: StoreLike,
  state: State,
  effect: TrainerEffect,
  _self: TrainerCard,
  op: EffectOp,
): State {
  const player = effect.player;
  const name = parseStrArg(op, 0);

  switch (name) {
    case 'noop':
      return state;

    case 'draw': {
      const n = parseIntArg(op, 1, 1);
      if (player.deck.cards.length === 0) {
        throw new GameError(GameMessage.CANNOT_PLAY_THIS_CARD);
      }
      player.deck.moveTo(player.hand, n);
      return state;
    }
    case 'heal': {
      const n = parseIntArg(op, 1, 30);
      const target = effect.target ?? player.active;
      return store.reduceEffect(state, new HealEffect(player, target, n));
    }
    case 'healCounter': {
      const n = parseIntArg(op, 1, 2) * 10;
      const target = effect.target ?? player.active;
      return store.reduceEffect(state, new HealEffect(player, target, n));
    }
    case 'healEachPokemon': {
      const n = parseIntArg(op, 1, 10);
      forEachMyPokemon(player, slot => {
        store.reduceEffect(state, new HealEffect(player, slot, n));
      });
      return state;
    }
    case 'clearSpecialConditions': {
      const target = effect.target ?? player.active;
      target.specialConditions = [];
      return state;
    }
    case 'switchActive': {
      const bench = player.bench.find(b => b.pokemons.cards.length > 0);
      if (!bench) {
        throw new GameError(GameMessage.CANNOT_PLAY_THIS_CARD);
      }
      player.switchPokemon(bench);
      return state;
    }
    case 'shuffleDraw': {
      const n = parseIntArg(op, 1, 7);
      player.hand.moveTo(player.deck, player.hand.cards.length);
      return store.prompt(state, new ShuffleDeckPrompt(player.id), order => {
        player.deck.applyOrder(order);
        player.deck.moveTo(player.hand, n);
      });
    }
    case 'discardHandDraw': {
      const n = parseIntArg(op, 1, 7);
      player.hand.moveTo(player.discard, player.hand.cards.length);
      player.deck.moveTo(player.hand, n);
      return state;
    }
    case 'discardEnergyDefending': {
      const n = parseIntArg(op, 1, 1);
      const opponent = state.players.find(p => p !== player) ?? player;
      const slot = opponent.active;
      slot.energies.cards.slice(-n).forEach((c: EnergyCard) => slot.energies.moveCardTo(c, opponent.discard));
      return state;
    }
    case 'searchPokemonToHand': {
      const n = parseIntArg(op, 1, 1);
      if (player.deck.cards.length === 0) {
        throw new GameError(GameMessage.CANNOT_PLAY_THIS_CARD);
      }
      return store.prompt(
        state,
        new ChooseCardsPrompt(
          player.id,
          GameMessage.CHOOSE_CARD_TO_HAND,
          player.deck,
          { superType: SuperType.POKEMON },
          { min: 0, max: n, allowCancel: true },
        ),
        cards => {
          (cards || []).forEach(card => player.deck.moveCardTo(card, player.hand));
          store.prompt(state, new ShuffleDeckPrompt(player.id), order => {
            player.deck.applyOrder(order);
          });
        },
      );
    }
    case 'searchTrainerToHand': {
      const n = parseIntArg(op, 1, 1);
      if (player.deck.cards.length === 0) {
        throw new GameError(GameMessage.CANNOT_PLAY_THIS_CARD);
      }
      return store.prompt(
        state,
        new ChooseCardsPrompt(
          player.id,
          GameMessage.CHOOSE_CARD_TO_HAND,
          player.deck,
          { superType: SuperType.TRAINER },
          { min: 0, max: n, allowCancel: true },
        ),
        cards => {
          (cards || []).forEach(card => player.deck.moveCardTo(card, player.hand));
          store.prompt(state, new ShuffleDeckPrompt(player.id), order => {
            player.deck.applyOrder(order);
          });
        },
      );
    }
    case 'recoverEnergyFromDiscard': {
      const n = parseIntArg(op, 1, 2);
      if (player.discard.cards.length === 0) {
        throw new GameError(GameMessage.CANNOT_PLAY_THIS_CARD);
      }
      return store.prompt(
        state,
        new ChooseCardsPrompt(
          player.id,
          GameMessage.CHOOSE_CARD_TO_HAND,
          player.discard,
          { superType: SuperType.ENERGY, energyType: EnergyType.BASIC },
          { min: 0, max: n, allowCancel: true },
        ),
        cards => {
          (cards || []).forEach(card => player.discard.moveCardTo(card, player.hand));
        },
      );
    }
    case 'recoverPokemonFromDiscard': {
      const n = parseIntArg(op, 1, 1);
      if (player.discard.cards.length === 0) {
        throw new GameError(GameMessage.CANNOT_PLAY_THIS_CARD);
      }
      return store.prompt(
        state,
        new ChooseCardsPrompt(
          player.id,
          GameMessage.CHOOSE_CARD_TO_HAND,
          player.discard,
          { superType: SuperType.POKEMON },
          { min: 0, max: n, allowCancel: true },
        ),
        cards => {
          (cards || []).forEach(card => player.discard.moveCardTo(card, player.hand));
        },
      );
    }
    case 'moveEnergyBetweenMine': {
      // Soft: move one energy from active to first bench (full UI needs MoveEnergyPrompt)
      const from = player.active;
      const to = player.bench.find(b => b.pokemons.cards.length > 0);
      if (!to || from.energies.cards.length === 0) {
        throw new GameError(GameMessage.CANNOT_PLAY_THIS_CARD);
      }
      const card = from.energies.cards[from.energies.cards.length - 1];
      from.energies.moveCardTo(card, to.energies);
      return state;
    }
    case 'gustOpponent': {
      // Force opponent to switch (Boss's Orders / Pokémon Catcher / Warp Point simplified)
      const opponent = state.players.find(p => p !== player) ?? player;
      const bench = opponent.bench.find(b => b.pokemons.cards.length > 0);
      if (!bench) {
        throw new GameError(GameMessage.CANNOT_PLAY_THIS_CARD);
      }
      opponent.switchPokemon(bench);
      return state;
    }
    case 'flipHeadsGustOpponent': {
      return flipCoins(store, state, player.id, 1, heads => {
        if (heads > 0) {
          const opponent = state.players.find(p => p !== player) ?? player;
          const bench = opponent.bench.find(b => b.pokemons.cards.length > 0);
          if (bench) {
            opponent.switchPokemon(bench);
          }
        }
      });
    }
    case 'flipHeadsDiscardEnergyOpponent': {
      return flipCoins(store, state, player.id, 1, heads => {
        if (heads > 0) {
          const opponent = state.players.find(p => p !== player) ?? player;
          const slot = opponent.active;
          const cards = slot.energies.cards.slice(-1);
          cards.forEach((c: EnergyCard) => slot.energies.moveCardTo(c, opponent.discard));
        }
      });
    }
    case 'bothShuffleDraw': {
      const n = parseIntArg(op, 1, 4);
      for (const p of state.players) {
        p.hand.moveTo(p.deck, p.hand.cards.length);
      }
      return store.prompt(state, new ShuffleDeckPrompt(player.id), order => {
        player.deck.applyOrder(order);
        const opponent = state.players.find(p => p !== player) ?? player;
        store.prompt(state, new ShuffleDeckPrompt(opponent.id), order2 => {
          opponent.deck.applyOrder(order2);
          for (const p of state.players) {
            p.deck.moveTo(p.hand, n);
          }
        });
      });
    }
    case 'shuffleHandToBottomDraw': {
      // Marnie / Iono: hand to bottom, draw N (opponent draws N-1 approximated same)
      const n = parseIntArg(op, 1, 5);
      const oppN = parseIntArg(op, 2, 4);
      for (const p of state.players) {
        const cards = p.hand.cards.slice();
        p.hand.cards = [];
        p.deck.cards.push(...cards);
      }
      for (const p of state.players) {
        const draw = p === player ? n : oppN;
        // bottom draw ≈ draw from top of reversed; approximate as draw N
        p.deck.moveTo(p.hand, draw);
      }
      return state;
    }
    case 'superScoopUp': {
      // Flip: if heads pick up active (simplified)
      return flipCoins(store, state, player.id, 1, heads => {
        if (heads > 0) {
          const slot = player.active;
          const toHand: Card[] = [];
          slot.energies.cards.forEach(c => toHand.push(c));
          slot.trainers.cards.forEach(c => toHand.push(c));
          slot.pokemons.cards.forEach(c => toHand.push(c));
          slot.energies.cards = [];
          slot.trainers.cards = [];
          slot.pokemons.cards = [];
          slot.damage = 0;
          slot.specialConditions = [];
          toHand.forEach(c => player.hand.cards.push(c as any));
          const bench = player.bench.find(b => b.pokemons.cards.length > 0);
          if (bench) {
            player.switchPokemon(bench);
          }
        }
      });
    }
    case 'drawUntilHand': {
      const n = parseIntArg(op, 1, 6);
      const need = Math.max(0, n - player.hand.cards.length);
      player.deck.moveTo(player.hand, need);
      return state;
    }
    case 'shuffleCardsFromDiscardToDeck': {
      const n = parseIntArg(op, 1, 3);
      const picked = player.discard.cards.slice(0, n);
      picked.forEach(c => player.discard.moveCardTo(c, player.deck));
      return store.prompt(state, new ShuffleDeckPrompt(player.id), order => {
        player.deck.applyOrder(order);
      });
    }
    case 'flipsDrawPerHeads': {
      const times = parseIntArg(op, 1, 3);
      return flipCoins(store, state, player.id, times, heads => {
        player.deck.moveTo(player.hand, heads);
      });
    }
    case 'plusPowerMarker': {
      const target = effect.target ?? player.active;
      const n = parseIntArg(op, 1, 10);
      target.marker.addMarker('PLUS_POWER_' + n, _self);
      return state;
    }
    case 'reduceDamageMarker': {
      const n = parseIntArg(op, 1, 30);
      const target = effect.target ?? player.active;
      target.marker.addMarker('REDUCE_DAMAGE_' + n, _self);
      return state;
    }
    case 'preventEffectsMarker': {
      const target = effect.target ?? player.active;
      target.marker.addMarker('PREVENT_EFFECTS', _self);
      return state;
    }
    case 'preventDamageNextTurn': {
      // "during your opponent's next turn, prevent all damage"
      const opponent = state.players.find(p => p !== player) ?? player;
      opponent.active.marker.addMarker('PREVENT_DAMAGE', _self);
      opponent.bench.forEach(b => b.marker.addMarker('PREVENT_DAMAGE', _self));
      return state;
    }
    case 'cantRetreatNextTurn': {
      const opponent = state.players.find(p => p !== player) ?? player;
      opponent.active.marker.addMarker('CANT_RETREAT', _self);
      return state;
    }
    case 'reduceDamageNextTurn': {
      const n = parseIntArg(op, 1, 30);
      player.active.marker.addMarker('REDUCE_DAMAGE_' + n, _self);
      return state;
    }
    case 'attachBasicFromDiscard': {
      // attach one basic energy from discard to self (active)
      const energy = player.discard.cards.find(
        (c: any) => c instanceof EnergyCard && c.energyType === EnergyType.BASIC,
      ) as EnergyCard | undefined;
      if (!energy) {
        return state;
      }
      player.discard.moveCardTo(energy, player.active.energies);
      return state;
    }
    case 'searchAnyToHand': {
      const n = parseIntArg(op, 1, 1);
      if (player.deck.cards.length === 0) {
        return state;
      }
      return store.prompt(
        state,
        new ChooseCardsPrompt(
          player.id,
          GameMessage.CHOOSE_CARD_TO_HAND,
          player.deck,
          {},
          { min: 0, max: n, allowCancel: true },
        ),
        cards => {
          (cards || []).forEach(card => player.deck.moveCardTo(card, player.hand));
          store.prompt(state, new ShuffleDeckPrompt(player.id), order => {
            player.deck.applyOrder(order);
          });
        },
      );
    }
    case 'opponentActiveSpecial': {
      const cond = mapCondition(parseStrArg(op, 1, 'CONFUSED'));
      if (cond !== undefined) {
        const opponent = state.players.find(p => p !== player) ?? player;
        opponent.active.specialConditions = Array.from(
          new Set([...opponent.active.specialConditions, cond]),
        );
      }
      return state;
    }
    case 'cantAttackOpponentNextTurn':
    case 'putCountersEachOpponent':
    case 'millOpponent':
    case 'switchSelf':
    case 'gustOpponent':
    case 'ignoreAllEffects':
    case 'flipUntilTailsTimes':
    case 'drawUntilHand':
    case 'preventEffectsNextTurn':
    case 'searchEnergyToSelf':
    case 'searchEnergyToHand':
    case 'attachBasicFromHandToBench':
      return applyAttackOp(store, state, effect as unknown as AttackEffect, op);
    case 'plusPrize': {
      const n = parseIntArg(op, 1, 1);
      player.active.marker.addMarker('PLUS_PRIZE_' + n, _self, state.turn + 1);
      return state;
    }
    default:
      return state;
  }
}

/** Apply one power/ability op on PowerEffect. */
export function applyPowerOp(
  store: StoreLike,
  state: State,
  effect: PowerEffect,
  self: PokemonCard,
  op: EffectOp,
): State {
  const player = effect.player;
  const name = parseStrArg(op, 0);

  switch (name) {
    case 'noop':
      return state;
    case 'draw': {
      const n = parseIntArg(op, 1, 1);
      player.deck.moveTo(player.hand, n);
      return state;
    }
    case 'oncePerTurnDraw': {
      const n = parseIntArg(op, 1, 1);
      const marker = self.name + '_DRAW';
      if (player.marker.hasMarker(marker, self)) {
        throw new GameError(GameMessage.POWER_ALREADY_USED);
      }
      player.marker.addMarker(marker, self);
      player.deck.moveTo(player.hand, n);
      return state;
    }
    case 'oncePerGameDraw': {
      const n = parseIntArg(op, 1, 1);
      const marker = self.name + '_VSTAR';
      if (player.marker.hasMarker(marker, self)) {
        throw new GameError(GameMessage.POWER_ALREADY_USED);
      }
      player.marker.addMarker(marker, self);
      player.deck.moveTo(player.hand, n);
      return state;
    }
    case 'reduceDamageSelf': {
      const n = parseIntArg(op, 1, 10);
      const slot = player.active;
      if (slot.getPokemonCard() === self) {
        slot.marker.addMarker('REDUCE_DAMAGE_' + n, self);
      }
      return state;
    }
    case 'preventEffectsSelf': {
      const slot = player.active;
      if (slot.getPokemonCard() === self) {
        slot.marker.addMarker('PREVENT_EFFECTS', self);
      }
      return state;
    }
    case 'noEvolution': {
      player.marker.addMarker('NO_EVOLUTION', self);
      return state;
    }
    case 'noTrainers': {
      player.marker.addMarker('NO_TRAINERS', self);
      return state;
    }
    case 'noPowers': {
      player.marker.addMarker('NO_POWERS', self);
      return state;
    }
    case 'bonusIfConfused': {
      const n = parseIntArg(op, 1, 30);
      const slot = player.active;
      if (slot.getPokemonCard() === self && slot.specialConditions.includes(SpecialCondition.CONFUSED)) {
        slot.marker.addMarker('PLUS_POWER_' + n, self);
      }
      return state;
    }
    case 'koRevengePerEnergy': {
      player.active.marker.addMarker('KO_REVENGE', self);
      return state;
    }
    case 'moreRetreatCostOpponent': {
      player.marker.addMarker('MORE_RETREAT_OPPONENT', self);
      return state;
    }
    case 'showOpponentHand': {
      return state;
    }
    case 'dittoTransform': {
      player.active.marker.addMarker('DITTO_TRANSFORM', self);
      return state;
    }
    case 'immuneToSpecial': {
      player.active.marker.addMarker('PREVENT_EFFECTS', self);
      return state;
    }
    case 'auraProtectBench': {
      player.bench.forEach(b => b.marker.addMarker('PREVENT_DAMAGE', self));
      return state;
    }
    case 'attachCostDiscardEnergy': {
      const n = parseIntArg(op, 1, 1);
      player.active.energies.cards.slice(-n).forEach((c: EnergyCard) => player.active.energies.moveCardTo(c, player.discard));
      return state;
    }
    case 'toBottomOfDeck': {
      player.discard.cards.slice(-1).forEach((c: any) => player.discard.moveCardTo(c, player.deck));
      return state;
    }
    case 'healBetweenTurns': {
      const n = parseIntArg(op, 1, 10);
      forEachMyPokemon(player, slot => {
        store.reduceEffect(state, new HealEffect(player, slot, n));
      });
      return state;
    }
    case 'toBottomOfDeck': {
      player.discard.cards.slice(-1).forEach((c: any) => player.discard.moveCardTo(c, player.deck));
      return state;
    }
    case 'auraProtectBench': {
      player.bench.forEach(b => b.marker.addMarker('PREVENT_DAMAGE', self));
      return state;
    }
    case 'attachCostDiscardEnergy': {
      player.active.energies.cards.slice(-1).forEach((c: EnergyCard) => player.active.energies.moveCardTo(c, player.discard));
      return state;
    }
    case 'roughSkin': {
      const slot = player.active;
      if (slot.getPokemonCard() === self) {
        slot.marker.addMarker('ROUGH_SKIN', self);
      }
      return state;
    }
    case 'poisonPoint': {
      const slot = player.active;
      if (slot.getPokemonCard() === self) {
        slot.marker.addMarker('POISON_POINT', self);
      }
      return state;
    }
    case 'plusPrize': {
      const n = parseIntArg(op, 1, 1);
      player.active.marker.addMarker('PLUS_PRIZE_' + n, self, state.turn + 1);
      return state;
    }
    case 'auraReduceDamage':
    case 'auraPreventEffects':
    case 'auraNoRetreatCost':
    case 'auraPlusDamage':
    case 'auraProtectBench':
    case 'auraCantRetreatOpponent':
      applyContinuousAura(store, state, self, player, [op], state.turn);
      return state;
    case 'attachBasicFromHandToBench': {
      const n = parseIntArg(op, 1, 1);
      const slots = player.bench.filter(b => b.pokemons.cards.length > 0);
      const energies = player.hand.cards
        .filter((c: Card) => c instanceof EnergyCard && (c as EnergyCard).energyType === EnergyType.BASIC)
        .slice(0, n * Math.max(1, slots.length)) as EnergyCard[];
      energies.forEach((c, i) => {
        const slot = slots[i % Math.max(1, slots.length)];
        if (slot) {
          player.hand.moveCardTo(c, slot.energies);
        }
      });
      return state;
    }
    case 'continuousStatic':
      return state;
    default:
      return state;
  }
}

/** True if op list has a real effect (not empty / noop-only). */
export function hasEffectOps(ops: EffectOp[] | undefined): boolean {
  return !!ops && ops.length > 0 && ops.some(op => op && op.split(':')[0] !== 'noop');
}

/**
 * Continuous "As long as ..." abilities: called each turn to (re)apply markers
 * while the Pokemon remains in play.
 */
export function applyContinuousAura(
  store: StoreLike,
  state: State,
  self: PokemonCard,
  player: {
    active: PokemonSlot;
    marker: { addMarker: (name: string, source: Card, untilTurn?: number) => void };
    forEachPokemon: (pt: PlayerType, h: (s: PokemonSlot) => void) => void;
  },
  ops: EffectOp[],
  turn: number,
): void {
  for (const op of ops) {
    const name = parseStrArg(op, 0);
    const n = parseIntArg(op, 1, 0);
    switch (name) {
      case 'auraReduceDamage':
      case 'reduceDamageSelf': {
        player.forEachPokemon(PlayerType.BOTTOM_PLAYER, slot => {
          slot.marker.addMarker('REDUCE_DAMAGE_' + (n || 20), self, turn + 1);
        });
        break;
      }
      case 'auraPreventEffects':
      case 'preventEffectsSelf':
      case 'preventEffectsMarker': {
        player.active.marker.addMarker('PREVENT_EFFECTS', self, turn + 1);
        break;
      }
      case 'auraCantRetreatOpponent': {
        // applied by engine when refreshing opponent slots
        break;
      }
      case 'auraNoRetreatCost':
      case 'noRetreatCost':
      case 'ZERO_RETREAT': {
        player.active.marker.addMarker('ZERO_RETREAT', self, turn + 1);
        break;
      }
      case 'auraPlusDamage':
      case 'plusPowerMarker': {
        player.active.marker.addMarker('PLUS_POWER_' + (n || 10), self, turn + 1);
        break;
      }
      case 'roughSkin': {
        player.active.marker.addMarker('ROUGH_SKIN', self, turn + 1);
        break;
      }
      case 'poisonPoint': {
        player.active.marker.addMarker('POISON_POINT', self, turn + 1);
        break;
      }
      case 'noTrainers': {
        player.marker.addMarker('NO_TRAINERS', self, turn + 1);
        break;
      }
      case 'noEvolution': {
        player.marker.addMarker('NO_EVOLUTION', self, turn + 1);
        break;
      }
      case 'moreRetreatCostOpponent': {
        player.marker.addMarker('MORE_RETREAT_OPPONENT', self, turn + 1);
        break;
      }
      default:
        break;
    }
  }
}
