import {
  AttackEffect,
  Effect,
  GameError,
  GameMessage,
  PokemonCard,
  Power,
  PowerEffect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
} from '@ptcg/common';

import { CommonAttack, CommonPower, CommonTrainer } from '../common.interfaces';

/**
 * Shared field: draw N cards from deck to hand.
 * Card TS supplies N: `drawCards(...).playCard(effect, 2)`.
 */
export const drawCards: CommonTrainer<[number]> = function (
  _self: TrainerCard,
  _store: StoreLike,
  _state: State,
  _effect: Effect,
) {
  return {
    playCard: (trainerEffect: TrainerEffect, count: number) => {
      const player = trainerEffect.player;
      if (player.deck.cards.length === 0) {
        throw new GameError(GameMessage.CANNOT_PLAY_THIS_CARD);
      }
      player.deck.moveTo(player.hand, count);
      return _state;
    },
  };
};

/**
 * Attack-side: draw N cards. Card TS supplies N.
 */
export const drawCardsAttack: CommonAttack<[number]> = function (
  _self: PokemonCard,
  _store: StoreLike,
  _state: State,
  _effect: Effect,
) {
  return {
    use: (attackEffect: AttackEffect, count: number) => {
      attackEffect.player.deck.moveTo(attackEffect.player.hand, count);
      return _state;
    },
  };
};

/**
 * Power-side: draw N cards. Card TS supplies N.
 */
export const drawCardsPower: CommonPower<[number]> = function (
  _self: PokemonCard,
  _store: StoreLike,
  _state: State,
  _effect: Effect,
) {
  return {
    reduce: (power: Power, count: number) => {
      const powerEffect = _effect as PowerEffect;
      powerEffect.player.deck.moveTo(powerEffect.player.hand, count);
      return _state;
    },
  };
};

/**
 * Discard hand, then draw N.
 */
export const discardHandDraw: CommonTrainer<[number]> = function (
  _self: TrainerCard,
  _store: StoreLike,
  _state: State,
  _effect: Effect,
) {
  return {
    playCard: (trainerEffect: TrainerEffect, count: number) => {
      const player = trainerEffect.player;
      player.hand.moveTo(player.discard, player.hand.cards.length);
      player.deck.moveTo(player.hand, count);
      return _state;
    },
  };
};
