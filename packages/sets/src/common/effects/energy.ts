import {
  AttackEffect,
  Effect,
  EnergyCard,
  EnergyType,
  PokemonCard,
  PokemonSlot,
  Power,
  PowerEffect,
  State,
  StoreLike,
  SuperType,
  ChooseCardsPrompt,
  GameMessage,
  TrainerCard,
  TrainerEffect,
} from '@ptcg/common';

import { CommonAttack, CommonPower, CommonTrainer } from '../common.interfaces';

/**
 * Discard N Energy from your Active. Card supplies N.
 */
export const discardEnergySelf: CommonAttack<[number]> = function (
  _self: PokemonCard,
  _store: StoreLike,
  _state: State,
  _effect: Effect,
) {
  return {
    use: (attackEffect: AttackEffect, count: number) => {
      const slot = attackEffect.player.active;
      slot.energies.cards.slice(-count).forEach(c => slot.energies.moveCardTo(c, attackEffect.player.discard));
      return _state;
    },
  };
};

/**
 * Discard N Energy from Defending. Card supplies N.
 */
export const discardEnergyDefending: CommonAttack<[number]> = function (
  _self: PokemonCard,
  _store: StoreLike,
  _state: State,
  _effect: Effect,
) {
  return {
    use: (attackEffect: AttackEffect, count: number) => {
      const opp = attackEffect.opponent;
      opp.active.energies.cards.slice(-count).forEach(c => opp.active.energies.moveCardTo(c, opp.discard));
      return _state;
    },
  };
};

/**
 * Attach N basic Energy from discard to self. Card supplies N.
 */
export const attachBasicFromDiscard: CommonAttack<[number]> = function (
  _self: PokemonCard,
  _store: StoreLike,
  _state: State,
  _effect: Effect,
) {
  return {
    use: (attackEffect: AttackEffect, count: number) => {
      const player = attackEffect.player;
      const energy = player.discard.cards
        .filter((c) => c instanceof EnergyCard && (c as EnergyCard).energyType === EnergyType.BASIC)
        .slice(0, count) as EnergyCard[];
      energy.forEach(c => player.discard.moveCardTo(c, player.active.energies));
      return _state;
    },
  };
};

/**
 * Search deck for N basic Energy → hand.
 */
export const searchEnergyToHand: CommonTrainer<[number]> = function (
  _self: TrainerCard,
  store: StoreLike,
  state: State,
  _effect: Effect,
) {
  return {
    playCard: (trainerEffect: TrainerEffect, count: number) => {
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
          { superType: SuperType.ENERGY, energyType: EnergyType.BASIC },
          { min: 0, max: count, allowCancel: true },
        ),
        cards => {
          (cards || []).forEach(card => player.deck.moveCardTo(card, player.hand));
        },
      );
    },
  };
};

/**
 * Power-side discard N energy from self.
 */
export const discardEnergySelfPower: CommonPower<[number]> = function (
  _self: PokemonCard,
  _store: StoreLike,
  _state: State,
  effect: Effect,
) {
  return {
    reduce: (_power: Power, count: number) => {
      const powerEffect = effect as PowerEffect;
      const slot = powerEffect.player.active;
      slot.energies.cards.slice(-count).forEach(c => slot.energies.moveCardTo(c, powerEffect.player.discard));
      return _state;
    },
  };
};
