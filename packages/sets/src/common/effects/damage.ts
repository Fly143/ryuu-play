import {
  AttackEffect,
  CoinFlipPrompt,
  DealDamageEffect,
  Effect,
  GameMessage,
  PokemonCard,
  State,
  StoreLike,
} from '@ptcg/common';

import { CommonAttack } from '../common.interfaces';

/**
 * Shared field: +N damage to this attack (card supplies N).
 */
export const bonusDamage: CommonAttack<[number]> = function (
  _self: PokemonCard,
  _store: StoreLike,
  _state: State,
  _effect: Effect,
) {
  return {
    use: (attackEffect: AttackEffect, bonus: number) => {
      attackEffect.damage += bonus;
      return _state;
    },
  };
};

/**
 * Shared field: + perUnit * count damage (card supplies perUnit and count).
 */
export const bonusDamagePer: CommonAttack<[number, number]> = function (
  _self: PokemonCard,
  _store: StoreLike,
  _state: State,
  _effect: Effect,
) {
  return {
    use: (attackEffect: AttackEffect, perUnit: number, count: number) => {
      attackEffect.damage += perUnit * count;
      return _state;
    },
  };
};

/**
 * Shared field: ignore Weakness and Resistance.
 */
export const ignoreWeaknessResistance: CommonAttack<[]> = function (
  _self: PokemonCard,
  _store: StoreLike,
  state: State,
  _effect: Effect,
) {
  return {
    use: (attackEffect: AttackEffect) => {
      attackEffect.ignoreWeakness = true;
      attackEffect.ignoreResistance = true;
      return state;
    },
  };
};

/**
 * Shared field: N self-damage (recoil). Card supplies N.
 */
export const selfDamage: CommonAttack<[number]> = function (
  _self: PokemonCard,
  store: StoreLike,
  state: State,
  _effect: Effect,
) {
  return {
    use: (attackEffect: AttackEffect, amount: number) => {
      const deal = new DealDamageEffect(attackEffect, amount);
      deal.target = attackEffect.player.active;
      store.reduceEffect(state, deal);
      return state;
    },
  };
};

/**
 * Shared field: flip times T, +D per heads. Card supplies T and D.
 */
export const flipTimesDamage: CommonAttack<[number, number]> = function (
  _self: PokemonCard,
  store: StoreLike,
  state: State,
  _effect: Effect,
) {
  return {
    use: (attackEffect: AttackEffect, times: number, perHead: number) => {
      const prompts = Array.from({ length: times }, () => new CoinFlipPrompt(attackEffect.player.id, GameMessage.COIN_FLIP));
      return store.prompt(state, prompts, results => {
        const heads = (results || []).filter(Boolean).length;
        attackEffect.damage += perHead * heads;
      });
    },
  };
};

// Re-export attack heal/draw so cards can import one namespace.
export { drawCardsAttack } from './draw';
export { healSelfAttack } from './heal';
