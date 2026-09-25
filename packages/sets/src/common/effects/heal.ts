import {
  AttackEffect,
  Effect,
  HealEffect,
  PlayerType,
  PokemonCard,
  PokemonSlot,
  Power,
  PowerEffect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
} from '@ptcg/common';

import { CommonAttack, CommonPower, CommonTrainer } from '../common.interfaces';

/**
 * Shared field: heal N damage from chosen / active Pokemon.
 * Card TS supplies N: `healDamage(...).playCard(effect, 30)`.
 */
export const healDamage: CommonTrainer<[number]> = function (
  _self: TrainerCard,
  store: StoreLike,
  state: State,
  _effect: Effect,
) {
  return {
    playCard: (trainerEffect: TrainerEffect, amount: number) => {
      const player = trainerEffect.player;
      const target: PokemonSlot = trainerEffect.target ?? player.active;
      store.reduceEffect(state, new HealEffect(player, target, amount));
      return state;
    },
  };
};

/**
 * Attack-side: heal N from self. Card TS supplies N.
 */
export const healSelfAttack: CommonAttack<[number]> = function (
  _self: PokemonCard,
  store: StoreLike,
  state: State,
  _effect: Effect,
) {
  return {
    use: (attackEffect: AttackEffect, amount: number) => {
      store.reduceEffect(state, new HealEffect(attackEffect.player, attackEffect.player.active, amount));
      return state;
    },
  };
};

/**
 * Power-side: heal N from self. Card TS supplies N.
 */
export const healSelfPower: CommonPower<[number]> = function (
  _self: PokemonCard,
  store: StoreLike,
  state: State,
  effect: Effect,
) {
  return {
    reduce: (_power: Power, amount: number) => {
      const powerEffect = effect as PowerEffect;
      store.reduceEffect(state, new HealEffect(powerEffect.player, powerEffect.player.active, amount));
      return state;
    },
  };
};

/**
 * Heal N from every Pokemon in play (own side).
 */
export const healEachPokemon: CommonTrainer<[number]> = function (
  _self: TrainerCard,
  store: StoreLike,
  state: State,
  _effect: Effect,
) {
  return {
    playCard: (trainerEffect: TrainerEffect, amount: number) => {
      const player = trainerEffect.player;
      player.forEachPokemon(PlayerType.BOTTOM_PLAYER, slot => {
        store.reduceEffect(state, new HealEffect(player, slot, amount));
      });
      return state;
    },
  };
};
