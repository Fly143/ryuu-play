import {
  AttackEffect,
  Effect,
  Player,
  PokemonCard,
  Power,
  PowerEffect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
} from '@ptcg/common';

import { applyAttackOp, applyContinuousAura, applyPowerOp, applyTrainerOp } from '../effect-ops';
import { CommonAttack, CommonPower, CommonTrainer } from '../common.interfaces';

/**
 * Re-apply a continuous aura/markers while this Pokemon is in play.
 * Called from BetweenTurnsEffect handlers on generated cards.
 */
export function refreshPowerAura(
  self: PokemonCard,
  store: StoreLike,
  state: State,
  player: Player,
  op: string,
): State {
  const owned =
    player.active.pokemons.cards.includes(self) ||
    player.bench.some(b => b.pokemons.cards.includes(self));
  if (!owned) {
    return state;
  }
  applyContinuousAura(store, state, self, player, [op], state.turn);
  return state;
}


/**
 * Generic EffectOp runner. Prefer named fields when available;
 * this reuses the effect-ops switch for the remaining ops.
 * Card TS supplies the op string: `runAttackOp(...).use(effect, 'searchAnyToHand:1')`.
 */
export const runAttackOp: CommonAttack<[string]> = function (
  _self: PokemonCard,
  store: StoreLike,
  state: State,
  _effect: Effect,
) {
  return {
    use: (attackEffect: AttackEffect, op: string) => {
      return applyAttackOp(store, state, attackEffect, op);
    },
  };
};

export const runPowerOp: CommonPower<[string]> = function (
  self: PokemonCard,
  store: StoreLike,
  state: State,
  _effect: Effect,
) {
  return {
    reduce: (_power: Power, op: string) => {
      return applyPowerOp(store, state, _effect as PowerEffect, self, op);
    },
  };
};

export const runTrainerOp: CommonTrainer<[string]> = function (
  self: TrainerCard,
  store: StoreLike,
  state: State,
  _effect: Effect,
) {
  return {
    playCard: (trainerEffect: TrainerEffect, op: string) => {
      return applyTrainerOp(store, state, trainerEffect, self, op);
    },
  };
};
