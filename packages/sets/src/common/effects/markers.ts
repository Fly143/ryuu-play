import {
  AttackEffect,
  Effect,
  PokemonCard,
  Power,
  PowerEffect,
  State,
  StoreLike,
} from '@ptcg/common';

import { CommonAttack, CommonPower } from '../common.interfaces';

/**
 * During next turn: this Pokemon can't attack.
 */
export const cantAttackNextTurn: CommonAttack<[]> = function (
  _self: PokemonCard,
  _store: StoreLike,
  _state: State,
  _effect: Effect,
) {
  return {
    use: (attackEffect: AttackEffect) => {
      attackEffect.player.active.marker.addMarker('CANT_ATTACK', attackEffect.attack as any, _state.turn + 2);
      return _state;
    },
  };
};

/**
 * During opponent's next turn: Defending can't attack.
 */
export const cantAttackOpponentNextTurn: CommonAttack<[]> = function (
  _self: PokemonCard,
  _store: StoreLike,
  _state: State,
  _effect: Effect,
) {
  return {
    use: (attackEffect: AttackEffect) => {
      attackEffect.opponent.active.marker.addMarker('CANT_ATTACK', attackEffect.attack as any, _state.turn + 1);
      return _state;
    },
  };
};

/**
 * During opponent's next turn: prevent all damage to self.
 */
export const preventDamageNextTurn: CommonAttack<[]> = function (
  _self: PokemonCard,
  _store: StoreLike,
  _state: State,
  _effect: Effect,
) {
  return {
    use: (attackEffect: AttackEffect) => {
      attackEffect.player.active.marker.addMarker('PREVENT_DAMAGE', attackEffect.attack as any, _state.turn + 1);
      return _state;
    },
  };
};

/**
 * During next turn: reduce damage to self by N. Card supplies N.
 */
export const reduceDamageNextTurn: CommonAttack<[number]> = function (
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
 * During opponent's next turn: Defending can't retreat.
 */
export const cantRetreatNextTurn: CommonAttack<[]> = function (
  _self: PokemonCard,
  _store: StoreLike,
  _state: State,
  _effect: Effect,
) {
  return {
    use: (attackEffect: AttackEffect) => {
      attackEffect.opponent.active.marker.addMarker('CANT_RETREAT', attackEffect.attack as any, _state.turn + 1);
      return _state;
    },
  };
};

/**
 * Power: +N less damage to self (Ability). Card supplies N.
 */
export const reduceDamageSelfPower: CommonPower<[number]> = function (
  self: PokemonCard,
  _store: StoreLike,
  _state: State,
  effect: Effect,
) {
  return {
    reduce: (_power: Power, amount: number) => {
      const powerEffect = effect as PowerEffect;
      powerEffect.player.active.marker.addMarker('REDUCE_DAMAGE_' + amount, self);
      return _state;
    },
  };
};

/**
 * Power: prevent all effects/damage to self (Ability).
 */
export const preventEffectsSelfPower: CommonPower<[]> = function (
  self: PokemonCard,
  _store: StoreLike,
  _state: State,
  effect: Effect,
) {
  return {
    reduce: (_power: Power) => {
      const powerEffect = effect as PowerEffect;
      powerEffect.player.active.marker.addMarker('PREVENT_EFFECTS', self);
      return _state;
    },
  };
};
