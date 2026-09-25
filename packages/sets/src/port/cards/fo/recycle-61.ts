import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Recycle_61 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "FO";
  public name: string = "Recycle";
  public fullName: string = "Recycle FO 61";
  public text: string = "Flip a coin. If heads, put a card in your discard pile on top of your deck.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "flipHeadsTopDiscardToDeck");
    }
    return state;
  }
}
