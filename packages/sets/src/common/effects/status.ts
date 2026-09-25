import {
  AddSpecialConditionsEffect,
  AttackEffect,
  Effect,
  PokemonCard,
  SpecialCondition,
  State,
  StoreLike,
} from '@ptcg/common';

import { CommonAttack } from '../common.interfaces';

/**
 * Apply special condition to Defending. Card supplies condition.
 */
export const specialDefending: CommonAttack<[SpecialCondition]> = function (
  _self: PokemonCard,
  store: StoreLike,
  state: State,
  _effect: Effect,
) {
  return {
    use: (attackEffect: AttackEffect, condition: SpecialCondition) => {
      store.reduceEffect(state, new AddSpecialConditionsEffect(attackEffect, [condition]));
      return state;
    },
  };
};

/**
 * Poison the Defending Pokemon.
 */
export const poisonDefending: CommonAttack<[]> = function (
  self: PokemonCard,
  store: StoreLike,
  state: State,
  effect: Effect,
) {
  return {
    use: (attackEffect: AttackEffect) => {
      store.reduceEffect(state, new AddSpecialConditionsEffect(attackEffect, [SpecialCondition.POISONED]));
      return state;
    },
  };
};

/**
 * Apply same special condition to self and Defending. Card supplies condition.
 */
export const specialBoth: CommonAttack<[SpecialCondition]> = function (
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
