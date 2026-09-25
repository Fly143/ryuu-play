import {
  AttackEffect,
  Effect,
  HealEffect,
  PokemonCard,
  SpecialCondition,
  State,
  StoreLike,
  AddSpecialConditionsEffect,
} from '@ptcg/common';

import { CommonAttack } from '../common.interfaces';

/**
 * Damage = per * (self damage counters). Card supplies per.
 */
export const damageTimesSelfCounters: CommonAttack<[number]> = function (
  _self: PokemonCard,
  _store: StoreLike,
  _state: State,
  _effect: Effect,
) {
  return {
    use: (attackEffect: AttackEffect, per: number) => {
      attackEffect.damage = per * Math.floor(attackEffect.player.active.damage / 10);
      return _state;
    },
  };
};

/**
 * Heal N equal to damage just dealt (after-attack heal). Card supplies fallback N.
 */
export const healSelfAfterAttack: CommonAttack<[number]> = function (
  _self: PokemonCard,
  store: StoreLike,
  state: State,
  _effect: Effect,
) {
  return {
    use: (attackEffect: AttackEffect, amount: number) => {
      const n = amount || attackEffect.damage;
      store.reduceEffect(state, new HealEffect(attackEffect.player, attackEffect.player.active, n));
      return state;
    },
  };
};

/**
 * +N per damage counter on Defending. Card supplies N.
 */
export const bonusPerDefendingDamageCounter: CommonAttack<[number]> = function (
  _self: PokemonCard,
  _store: StoreLike,
  _state: State,
  _effect: Effect,
) {
  return {
    use: (attackEffect: AttackEffect, per: number) => {
      attackEffect.damage += per * Math.floor(attackEffect.opponent.active.damage / 10);
      return _state;
    },
  };
};

/**
 * +N per own Benched Pokemon. Card supplies N.
 */
export const bonusPerOwnBench: CommonAttack<[number]> = function (
  _self: PokemonCard,
  _store: StoreLike,
  _state: State,
  _effect: Effect,
) {
  return {
    use: (attackEffect: AttackEffect, per: number) => {
      const n = attackEffect.player.bench.filter(b => b.pokemons.cards.length > 0).length;
      attackEffect.damage += per * n;
      return _state;
    },
  };
};

/**
 * +N per opponent Benched Pokemon. Card supplies N.
 */
export const bonusPerOpponentBench: CommonAttack<[number]> = function (
  _self: PokemonCard,
  _store: StoreLike,
  _state: State,
  _effect: Effect,
) {
  return {
    use: (attackEffect: AttackEffect, per: number) => {
      const n = attackEffect.opponent.bench.filter(b => b.pokemons.cards.length > 0).length;
      attackEffect.damage += per * n;
      return _state;
    },
  };
};

/**
 * Damage = per * Pokemon in play (both sides). Card supplies per.
 */
export const damageTimesPokemonInPlay: CommonAttack<[number]> = function (
  _self: PokemonCard,
  _store: StoreLike,
  _state: State,
  _effect: Effect,
) {
  return {
    use: (attackEffect: AttackEffect, per: number) => {
      let n = 1;
      n += attackEffect.player.bench.filter(b => b.pokemons.cards.length > 0).length;
      n += 1;
      n += attackEffect.opponent.bench.filter(b => b.pokemons.cards.length > 0).length;
      attackEffect.damage = per * n;
      return _state;
    },
  };
};

/**
 * +N per Prize card taken (by either player). Card supplies N.
 */
export const bonusPerPrize: CommonAttack<[number]> = function (
  _self: PokemonCard,
  _store: StoreLike,
  _state: State,
  _effect: Effect,
) {
  return {
    use: (attackEffect: AttackEffect, per: number) => {
      const myTaken = 6 - attackEffect.player.getPrizeLeft();
      const oppTaken = 6 - attackEffect.opponent.getPrizeLeft();
      attackEffect.damage += per * (myTaken + oppTaken);
      return _state;
    },
  };
};

/**
 * Clear special conditions on self.
 */
export const clearSpecialConditions: CommonAttack<[]> = function (
  _self: PokemonCard,
  _store: StoreLike,
  _state: State,
  _effect: Effect,
) {
  return {
    use: (attackEffect: AttackEffect) => {
      attackEffect.player.active.specialConditions = [];
      return _state;
    },
  };
};

/**
 * Put N damage counters (N*10) on each of opponent's Pokemon.
 */
export const putCountersEachOpponent: CommonAttack<[number]> = function (
  _self: PokemonCard,
  _store: StoreLike,
  _state: State,
  _effect: Effect,
) {
  return {
    use: (attackEffect: AttackEffect, counters: number) => {
      const opp = attackEffect.opponent;
      opp.active.damage += counters * 10;
      opp.bench.forEach(b => {
        if (b.pokemons.cards.length > 0) {
          b.damage += counters * 10;
        }
      });
      return _state;
    },
  };
};

/**
 * Put N damage counters (N*10) on Defending.
 */
export const putCountersDefending: CommonAttack<[number]> = function (
  _self: PokemonCard,
  _store: StoreLike,
  _state: State,
  _effect: Effect,
) {
  return {
    use: (attackEffect: AttackEffect, counters: number) => {
      attackEffect.opponent.active.damage += counters * 10;
      return _state;
    },
  };
};

/**
 * Ascension: search deck for evolution of self and put onto self (simplified → hand).
 */
export const ascension: CommonAttack<[]> = function (
  _self: PokemonCard,
  store: StoreLike,
  state: State,
  _effect: Effect,
) {
  return {
    use: (attackEffect: AttackEffect) => {
      const { ChooseCardsPrompt, GameMessage, SuperType, ShuffleDeckPrompt } = require('@ptcg/common');
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
          { superType: SuperType.POKEMON },
          { min: 0, max: 1, allowCancel: true },
        ),
        (cards: any) => {
          (cards || []).forEach((card: any) => player.deck.moveCardTo(card, player.hand));
          store.prompt(state, new ShuffleDeckPrompt(player.id), (order: number[]) => {
            player.deck.applyOrder(order);
          });
        },
      );
    },
  };
};

/**
 * Both Active get same special condition. Card supplies condition.
 */
export const specialBothStatus: CommonAttack<[SpecialCondition]> = function (
  _self: PokemonCard,
  store: StoreLike,
  state: State,
  _effect: Effect,
) {
  return {
    use: (attackEffect: AttackEffect, condition: SpecialCondition) => {
      store.reduceEffect(state, new AddSpecialConditionsEffect(attackEffect, [condition]));
      const selfEffect = new AddSpecialConditionsEffect(attackEffect, [condition]);
      selfEffect.target = attackEffect.player.active;
      store.reduceEffect(state, selfEffect);
      return state;
    },
  };
};
