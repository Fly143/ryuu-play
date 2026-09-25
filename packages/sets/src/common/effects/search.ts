import {
  ChooseCardsPrompt,
  Effect,
  FilterType,
  GameMessage,
  PokemonCard,
  ShuffleDeckPrompt,
  Stage,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  SuperType,
} from '@ptcg/common';

import { CommonAttack, CommonTrainer } from '../common.interfaces';

/**
 * Shared field: search deck for up to N cards matching filter → hand.
 * Card supplies N (and may wrap filter).
 */
export const searchToHand: CommonTrainer<[number, FilterType?]> = function (
  _self: TrainerCard,
  store: StoreLike,
  state: State,
  _effect: Effect,
) {
  return {
    playCard: (trainerEffect: TrainerEffect, count: number, filter?: FilterType) => {
      const player = trainerEffect.player;
      if (player.deck.cards.length === 0) {
        return state;
      }
      return store.prompt(
        state,
        new ChooseCardsPrompt(
          player.id,
          GameMessage.CHOOSE_CARD_TO_HAND,
          player.deck,
          filter ?? {},
          { min: 0, max: count, allowCancel: true },
        ),
        cards => {
          (cards || []).forEach(card => player.deck.moveCardTo(card, player.hand));
          store.prompt(state, new ShuffleDeckPrompt(player.id), order => {
            player.deck.applyOrder(order);
          });
        },
      );
    },
  };
};

/**
 * Attack-side: search Basic Pokemon to bench, up to N.
 */
export const searchBasicToBench: CommonAttack<[number]> = function (
  _self: PokemonCard,
  store: StoreLike,
  state: State,
  _effect: Effect,
) {
  return {
    use: (attackEffect, count: number) => {
      const player = attackEffect.player;
      const slots = player.bench.filter(b => b.pokemons.cards.length === 0);
      const max = Math.min(slots.length, count);
      if (player.deck.cards.length === 0 || max <= 0) {
        return state;
      }
      return store.prompt(
        state,
        new ChooseCardsPrompt(
          player.id,
          GameMessage.CHOOSE_CARD_TO_PUT_ONTO_BENCH,
          player.deck,
          { superType: SuperType.POKEMON, stage: Stage.BASIC },
          { min: 0, max, allowCancel: true },
        ),
        cards => {
          (cards || []).slice(0, slots.length).forEach((card, i) => {
            player.deck.moveCardTo(card, slots[i].pokemons);
            slots[i].pokemonPlayedTurn = state.turn;
          });
          store.prompt(state, new ShuffleDeckPrompt(player.id), order => {
            player.deck.applyOrder(order);
          });
        },
      );
    },
  };
};
