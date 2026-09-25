import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class SacredAsh_96 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "FLF";
  public name: string = "Sacred Ash";
  public fullName: string = "Sacred Ash FLF 96";
  public text: string = "Shuffle 5 Pokémon from your discard pile into your deck. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "shuffleCardsFromDiscardToDeck:5");
    }
    return state;
  }
}
