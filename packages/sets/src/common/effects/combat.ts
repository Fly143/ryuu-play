import {
  AttackEffect,
  Card,
  ChooseCardsPrompt,
  CoinFlipPrompt,
  Effect,
  EnergyCard,
  EnergyType,
  GameMessage,
  PokemonCard,
  Power,
  PowerEffect,
  ShuffleDeckPrompt,
  State,
  StoreLike,
  SuperType,
} from '@ptcg/common';

import { CommonAttack, CommonPower } from '../common.interfaces';

/**
 * Move 1 Energy from Active to a Benched Pokemon.
 */
export const energyTrans: CommonAttack<[]> = function (
  _self: PokemonCard,
  _store: StoreLike,
  _state: State,
  _effect: Effect,
) {
  return {
    use: (attackEffect: AttackEffect) => {
      const player = attackEffect.player;
      const to = player.bench.find(b => b.pokemons.cards.length > 0);
      if (to && player.active.energies.cards.length > 0) {
        const card = player.active.energies.cards[player.active.energies.cards.length - 1];
        player.active.energies.moveCardTo(card, to.energies);
      }
      return _state;
    },
  };
};

/**
 * Search deck for N basic Energy and attach to self.
 */
export const searchEnergyToSelf: CommonAttack<[number]> = function (
  _self: PokemonCard,
  store: StoreLike,
  state: State,
  _effect: Effect,
) {
  return {
    use: (attackEffect: AttackEffect, count: number) => {
      const player = attackEffect.player;
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
          { min: 0, max: count, allowCancel: true },
        ),
        (cards: Card[] | null) => {
          (cards || []).forEach((card: Card) => {
            player.deck.moveCardTo(card, player.active.energies);
          });
          store.prompt(state, new ShuffleDeckPrompt(player.id), (order: number[]) => {
            player.deck.applyOrder(order);
          });
        },
      );
    },
  };
};

/**
 * +N damage this attack (PlusPower style).
 */
export const plusPower: CommonAttack<[number]> = function (
  _self: PokemonCard,
  _store: StoreLike,
  _state: State,
  _effect: Effect,
) {
  return {
    use: (attackEffect: AttackEffect, amount: number) => {
      attackEffect.damage += amount;
      return _state;
    },
  };
};

/**
 * +N damage based on energy attached to self.
 */
export const bonusPerEnergySelf: CommonAttack<[number]> = function (
  _self: PokemonCard,
  _store: StoreLike,
  _state: State,
  _effect: Effect,
) {
  return {
    use: (attackEffect: AttackEffect, per: number) => {
      attackEffect.damage += per * attackEffect.player.active.energies.cards.length;
      return _state;
    },
  };
};

/**
 * Damage = per * energy count on self.
 */
export const damageTimesEnergySelf: CommonAttack<[number]> = function (
  _self: PokemonCard,
  _store: StoreLike,
  _state: State,
  _effect: Effect,
) {
  return {
    use: (attackEffect: AttackEffect, per: number) => {
      attackEffect.damage = per * attackEffect.player.active.energies.cards.length;
      return _state;
    },
  };
};

/**
 * During next turn: reduce damage to self by N.
 */
export const selfReduceDamageNextTurn: CommonAttack<[number]> = function (
  _self: PokemonCard,
  _store: StoreLike,
  _state: State,
  _effect: Effect,
) {
  return {
    use: (attackEffect: AttackEffect, amount: number) => {
      attackEffect.player.active.marker.addMarker('REDUCE_DAMAGE_' + amount, attackEffect.attack as any, _state.turn + 2);
      return _state;
    },
  };
};

/**
 * GX: once per game marker.
 */
export const gxOncePerGame: CommonAttack<[]> = function (
  _self: PokemonCard,
  _store: StoreLike,
  _state: State,
  _effect: Effect,
) {
  return {
    use: (attackEffect: AttackEffect) => {
      const marker = 'GX_USED';
      if (attackEffect.player.marker.hasMarker(marker)) {
        return _state;
      }
      attackEffect.player.marker.addMarker(marker, attackEffect.attack as any);
      return _state;
    },
  };
};

/**
 * Flip up to 8 coins: +D per heads (flip-until-tails approx). Card supplies D.
 */
export const flipUntilTailsDamage: CommonAttack<[number]> = function (
  _self: PokemonCard,
  store: StoreLike,
  state: State,
  _effect: Effect,
) {
  return {
    use: (attackEffect: AttackEffect, per: number) => {
      const prompts = Array.from(
        { length: 8 },
        () => new CoinFlipPrompt(attackEffect.player.id, GameMessage.COIN_FLIP),
      );
      return store.prompt(state, prompts, (results: boolean[] | null) => {
        const heads = (results || []).filter(Boolean).length;
        attackEffect.damage += per * heads;
      });
    },
  };
};

/**
 * Rough Skin / Poison Point: mark self for counter damage.
 */
export const roughSkinPower: CommonPower<[]> = function (
  self: PokemonCard,
  _store: StoreLike,
  _state: State,
  effect: Effect,
) {
  return {
    reduce: (_power: Power) => {
      const powerEffect = effect as PowerEffect;
      powerEffect.player.active.marker.addMarker('ROUGH_SKIN', self);
      return _state;
    },
  };
};

/**
 * Look at opponent's hand (information only).
 */
export const peekOpponentHand: CommonAttack<[]> = function (
  _self: PokemonCard,
  _store: StoreLike,
  state: State,
  _effect: Effect,
) {
  return {
    use: (_attackEffect: AttackEffect) => state,
  };
};

/**
 * Flip: if heads discard 1 energy from Defending.
 */
export const flipHeadsDiscardEnergyOpponent: CommonAttack<[]> = function (
  _self: PokemonCard,
  store: StoreLike,
  state: State,
  _effect: Effect,
) {
  return {
    use: (attackEffect: AttackEffect) => {
      return store.prompt(
        state,
        new CoinFlipPrompt(attackEffect.player.id, GameMessage.COIN_FLIP),
        (result: boolean) => {
          if (result === true) {
            const opp = attackEffect.opponent;
            const cards = opp.active.energies.cards.slice(-1);
            cards.forEach((c: EnergyCard) => opp.active.energies.moveCardTo(c, opp.discard));
          }
        },
      );
    },
  };
};
