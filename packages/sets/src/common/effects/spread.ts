import {
  AttackEffect,
  Effect,
  PokemonCard,
  PokemonSlot,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
} from '@ptcg/common';

import { CommonAttack, CommonTrainer } from '../common.interfaces';

/**
 * Deal N damage to 1 of opponent's Benched (or Active if no bench). Card supplies N.
 */
export const damageOneOpponent: CommonAttack<[number]> = function (
  _self: PokemonCard,
  _store: StoreLike,
  _state: State,
  _effect: Effect,
) {
  return {
    use: (attackEffect: AttackEffect, amount: number) => {
      const opp = attackEffect.opponent;
      const target = opp.bench.find(b => b.pokemons.cards.length > 0);
      if (target) {
        target.damage += amount;
      } else {
        opp.active.damage += amount;
      }
      return _state;
    },
  };
};

/**
 * Deal N damage to 2 of opponent's Benched. Card supplies N.
 */
export const damageTwoOpponentBench: CommonAttack<[number]> = function (
  _self: PokemonCard,
  _store: StoreLike,
  _state: State,
  _effect: Effect,
) {
  return {
    use: (attackEffect: AttackEffect, amount: number) => {
      attackEffect.opponent.bench
        .filter(b => b.pokemons.cards.length > 0)
        .slice(0, 2)
        .forEach(b => { b.damage += amount; });
      return _state;
    },
  };
};

/**
 * Deal N damage to all of opponent's Pokemon (Active + Bench).
 */
export const damageAllOpponent: CommonAttack<[number]> = function (
  _self: PokemonCard,
  _store: StoreLike,
  _state: State,
  _effect: Effect,
) {
  return {
    use: (attackEffect: AttackEffect, amount: number) => {
      const opp = attackEffect.opponent;
      opp.active.damage += amount;
      opp.bench.forEach(b => {
        if (b.pokemons.cards.length > 0) {
          b.damage += amount;
        }
      });
      return _state;
    },
  };
};

/**
 * Deal N damage to all Benched (both sides).
 */
export const damageAllBench: CommonAttack<[number]> = function (
  _self: PokemonCard,
  _store: StoreLike,
  _state: State,
  _effect: Effect,
) {
  return {
    use: (attackEffect: AttackEffect, amount: number) => {
      const sides = [attackEffect.player, attackEffect.opponent];
      sides.forEach(p => p.bench.forEach(b => {
        if (b.pokemons.cards.length > 0) {
          b.damage += amount;
        }
      }));
      return _state;
    },
  };
};

/**
 * Deal N damage to 1 of your own Benched. Card supplies N.
 */
export const damageOwnBench: CommonAttack<[number]> = function (
  _self: PokemonCard,
  _store: StoreLike,
  _state: State,
  _effect: Effect,
) {
  return {
    use: (attackEffect: AttackEffect, amount: number) => {
      const b = attackEffect.player.bench.find(x => x.pokemons.cards.length > 0);
      if (b) {
        b.damage += amount;
      }
      return _state;
    },
  };
};

/**
 * Put N damage counters (N*10) on Defending. Card supplies N.
 */
export const putDamageCountersDefending: CommonAttack<[number]> = function (
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
 * Trainer: deal N to 1 of opponent's Pokemon.
 */
export const damageOneOpponentTrainer: CommonTrainer<[number]> = function (
  _self: TrainerCard,
  _store: StoreLike,
  _state: State,
  _effect: Effect,
) {
  return {
    playCard: (trainerEffect: TrainerEffect, amount: number) => {
      const opp = _state.players.find(p => p !== trainerEffect.player) ?? trainerEffect.player;
      const target = opp.bench.find(b => b.pokemons.cards.length > 0);
      if (target) {
        target.damage += amount;
      } else {
        opp.active.damage += amount;
      }
      return _state;
    },
  };
};
