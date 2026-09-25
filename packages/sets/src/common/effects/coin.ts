import {
  AttackEffect,
  CoinFlipPrompt,
  Effect,
  GameMessage,
  PokemonCard,
  SpecialCondition,
  AddSpecialConditionsEffect,
  DealDamageEffect,
  State,
  StoreLike,
} from '@ptcg/common';

import { CommonAttack } from '../common.interfaces';

/**
 * Shared field: flip a coin; if heads +N damage. Card supplies N.
 */
export const flipHeadsBonusDamage: CommonAttack<[number]> = function (
  _self: PokemonCard,
  store: StoreLike,
  state: State,
  _effect: Effect,
) {
  return {
    use: (attackEffect: AttackEffect, bonus: number) => {
      return store.prompt(
        state,
        new CoinFlipPrompt(attackEffect.player.id, GameMessage.COIN_FLIP),
        result => {
          if (result === true) {
            attackEffect.damage += bonus;
          }
        },
      );
    },
  };
};

/**
 * Shared field: flip; if heads apply special condition. Card supplies condition.
 */
export const flipHeadsSpecialCondition: CommonAttack<[SpecialCondition]> = function (
  _self: PokemonCard,
  store: StoreLike,
  state: State,
  _effect: Effect,
) {
  return {
    use: (attackEffect: AttackEffect, condition: SpecialCondition) => {
      return store.prompt(
        state,
        new CoinFlipPrompt(attackEffect.player.id, GameMessage.COIN_FLIP),
        result => {
          if (result === true) {
            store.reduceEffect(
              state,
              new AddSpecialConditionsEffect(attackEffect, [condition]),
            );
          }
        },
      );
    },
  };
};

/**
 * Shared field: flip; if tails N self damage. Card supplies N.
 */
export const flipTailsSelfDamage: CommonAttack<[number]> = function (
  _self: PokemonCard,
  store: StoreLike,
  state: State,
  _effect: Effect,
) {
  return {
    use: (attackEffect: AttackEffect, amount: number) => {
      return store.prompt(
        state,
        new CoinFlipPrompt(attackEffect.player.id, GameMessage.COIN_FLIP),
        result => {
          if (result === false) {
            const deal = new DealDamageEffect(attackEffect, amount);
            deal.target = attackEffect.player.active;
            store.reduceEffect(state, deal);
          }
        },
      );
    },
  };
};
