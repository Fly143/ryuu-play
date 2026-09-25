import {
  AttackEffect,
  Card,
  Effect,
  PokemonCard,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
} from '@ptcg/common';

import { CommonAttack, CommonTrainer } from '../common.interfaces';

/**
 * Discard N cards from opponent's hand. Card supplies N.
 */
export const discardOpponentHand: CommonAttack<[number]> = function (
  _self: PokemonCard,
  _store: StoreLike,
  _state: State,
  _effect: Effect,
) {
  return {
    use: (attackEffect: AttackEffect, count: number) => {
      const opp = attackEffect.opponent;
      opp.hand.moveTo(opp.discard, Math.min(count, opp.hand.cards.length));
      return _state;
    },
  };
};

/**
 * Discard N cards from your hand. Card supplies N.
 */
export const discardFromHand: CommonAttack<[number]> = function (
  _self: PokemonCard,
  _store: StoreLike,
  _state: State,
  _effect: Effect,
) {
  return {
    use: (attackEffect: AttackEffect, count: number) => {
      const player = attackEffect.player;
      player.hand.moveTo(player.discard, Math.min(count, player.hand.cards.length));
      return _state;
    },
  };
};

/**
 * Recover N cards from discard to hand. Card supplies N.
 */
export const recoverFromDiscard: CommonTrainer<[number]> = function (
  _self: TrainerCard,
  _store: StoreLike,
  _state: State,
  _effect: Effect,
) {
  return {
    playCard: (trainerEffect: TrainerEffect, count: number) => {
      const player = trainerEffect.player;
      if (player.discard.cards.length === 0) {
        return _state;
      }
      player.discard.moveTo(player.hand, Math.min(count, player.discard.cards.length));
      return _state;
    },
  };
};

/**
 * Return Active and all attached cards to hand (Scoop Up).
 */
export const scoopUpSelf: CommonAttack<[]> = function (
  _self: PokemonCard,
  _store: StoreLike,
  _state: State,
  _effect: Effect,
) {
  return {
    use: (attackEffect: AttackEffect) => {
      const player = attackEffect.player;
      const slot = player.active;
      const toHand: Card[] = [];
      slot.energies.cards.forEach(c => toHand.push(c));
      slot.trainers.cards.forEach(c => toHand.push(c));
      slot.pokemons.cards.forEach(c => toHand.push(c));
      slot.energies.cards = [];
      slot.trainers.cards = [];
      slot.pokemons.cards = [];
      slot.damage = 0;
      slot.specialConditions = [];
      toHand.forEach(c => (player.hand as any).cards.push(c));
      const bench = player.bench.find(b => b.pokemons.cards.length > 0);
      if (bench) {
        player.switchPokemon(bench);
      }
      return _state;
    },
  };
};

/**
 * Trainer: draw until hand has N cards. Card supplies N.
 */
export const drawUntilHand: CommonTrainer<[number]> = function (
  _self: TrainerCard,
  _store: StoreLike,
  _state: State,
  _effect: Effect,
) {
  return {
    playCard: (trainerEffect: TrainerEffect, target: number) => {
      const player = trainerEffect.player;
      const need = Math.max(0, target - player.hand.cards.length);
      player.deck.moveTo(player.hand, need);
      return _state;
    },
  };
};

/**
 * Both players draw N. Card supplies N.
 */
export const bothDraw: CommonTrainer<[number]> = function (
  _self: TrainerCard,
  _store: StoreLike,
  state: State,
  _effect: Effect,
) {
  return {
    playCard: (_trainerEffect: TrainerEffect, count: number) => {
      state.players.forEach(p => p.deck.moveTo(p.hand, count));
      return state;
    },
  };
};

/**
 * Trainer: discard N cards from opponent's hand. Card supplies N.
 */
export const discardOpponentHandTrainer: CommonTrainer<[number]> = function (
  _self: TrainerCard,
  _store: StoreLike,
  state: State,
  _effect: Effect,
) {
  return {
    playCard: (trainerEffect: TrainerEffect, count: number) => {
      const opp = state.players.find(p => p !== trainerEffect.player) ?? trainerEffect.player;
      opp.hand.moveTo(opp.discard, Math.min(count, opp.hand.cards.length));
      return state;
    },
  };
};

/**
 * Trainer: discard N cards from your hand. Card supplies N.
 */
export const discardFromHandTrainer: CommonTrainer<[number]> = function (
  _self: TrainerCard,
  _store: StoreLike,
  _state: State,
  _effect: Effect,
) {
  return {
    playCard: (trainerEffect: TrainerEffect, count: number) => {
      const player = trainerEffect.player;
      player.hand.moveTo(player.discard, Math.min(count, player.hand.cards.length));
      return _state;
    },
  };
};
