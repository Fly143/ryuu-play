import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class EnergyRecycler_123 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "GRI";
  public name: string = "Energy Recycler";
  public fullName: string = "Energy Recycler GRI 123";
  public text: string = "Shuffle 5 basic Energy cards from your discard pile into your deck. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "shuffleCardsFromDiscardToDeck:5");
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "shuffleCardsFromDiscardToDeck:5");
    }
    return state;
  }
}
