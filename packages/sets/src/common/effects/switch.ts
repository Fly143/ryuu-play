import {
  AttackEffect,
  Effect,
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
 * Switch your Active with a Benched Pokemon.
 */
export const switchSelf: CommonAttack<[]> = function (
  _self: PokemonCard,
  _store: StoreLike,
  _state: State,
  _effect: Effect,
) {
  return {
    use: (attackEffect: AttackEffect) => {
      const player = attackEffect.player;
      const bench = player.bench.find(b => b.pokemons.cards.length > 0);
      if (bench) {
        player.switchPokemon(bench);
      }
      return _state;
    },
  };
};

/**
 * Force opponent to switch Active with a Benched Pokemon.
 */
export const gustOpponent: CommonAttack<[]> = function (
  _self: PokemonCard,
  _store: StoreLike,
  _state: State,
  _effect: Effect,
) {
  return {
    use: (attackEffect: AttackEffect) => {
      const opp = attackEffect.opponent;
      const bench = opp.bench.find(b => b.pokemons.cards.length > 0);
      if (bench) {
        opp.switchPokemon(bench);
      }
      return _state;
    },
  };
};

/**
 * Trainer: switch your Active with a Benched Pokemon.
 */
export const switchSelfTrainer: CommonTrainer<[]> = function (
  _self: TrainerCard,
  _store: StoreLike,
  _state: State,
  _effect: Effect,
) {
  return {
    playCard: (trainerEffect: TrainerEffect) => {
      const player = trainerEffect.player;
      const bench = player.bench.find(b => b.pokemons.cards.length > 0);
      if (bench) {
        player.switchPokemon(bench);
      }
      return _state;
    },
  };
};

/**
 * Trainer: force opponent to switch Active with a Benched Pokemon.
 */
export const gustOpponentTrainer: CommonTrainer<[]> = function (
  _self: TrainerCard,
  _store: StoreLike,
  _state: State,
  _effect: Effect,
) {
  return {
    playCard: (trainerEffect: TrainerEffect) => {
      const opp = _state.players.find(p => p !== trainerEffect.player) ?? trainerEffect.player;
      const bench = opp.bench.find(b => b.pokemons.cards.length > 0);
      if (bench) {
        opp.switchPokemon(bench);
      }
      return _state;
    },
  };
};

/**
 * Power: switch self with Active.
 */
export const switchSelfPower: CommonPower<[]> = function (
  _self: PokemonCard,
  _store: StoreLike,
  _state: State,
  effect: Effect,
) {
  return {
    reduce: (_power: Power) => {
      const powerEffect = effect as PowerEffect;
      const player = powerEffect.player;
      const bench = player.bench.find(b => b.pokemons.cards.length > 0);
      if (bench) {
        player.switchPokemon(bench);
      }
      return _state;
    },
  };
};
