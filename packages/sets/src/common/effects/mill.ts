import {
  AttackEffect,
  Effect,
  PokemonCard,
  State,
  StoreLike,
  ShuffleDeckPrompt,
  TrainerCard,
  TrainerEffect,
} from '@ptcg/common';

import { CommonAttack, CommonTrainer } from '../common.interfaces';

/**
 * Mill N cards from opponent's deck. Card supplies N.
 */
export const millOpponent: CommonAttack<[number]> = function (
  _self: PokemonCard,
  _store: StoreLike,
  _state: State,
  _effect: Effect,
) {
  return {
    use: (attackEffect: AttackEffect, count: number) => {
      attackEffect.opponent.deck.moveTo(attackEffect.opponent.discard, count);
      return _state;
    },
  };
};

/**
 * Mill N cards from your deck. Card supplies N.
 */
export const millSelf: CommonAttack<[number]> = function (
  _self: PokemonCard,
  _store: StoreLike,
  _state: State,
  _effect: Effect,
) {
  return {
    use: (attackEffect: AttackEffect, count: number) => {
      attackEffect.player.deck.moveTo(attackEffect.player.discard, count);
      return _state;
    },
  };
};

/**
 * Shuffle opponent's deck.
 */
export const shuffleOpponentDeck: CommonTrainer<[]> = function (
  _self: TrainerCard,
  store: StoreLike,
  state: State,
  _effect: Effect,
) {
  return {
    playCard: (trainerEffect: TrainerEffect) => {
      const opp = state.players.find(p => p !== trainerEffect.player) ?? trainerEffect.player;
      return store.prompt(state, new ShuffleDeckPrompt(opp.id), order => {
        opp.deck.applyOrder(order);
      });
    },
  };
};
