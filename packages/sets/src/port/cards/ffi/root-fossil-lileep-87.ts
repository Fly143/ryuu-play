import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class RootFossilLileep_87 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "FFI";
  public name: string = "Root Fossil Lileep";
  public fullName: string = "Root Fossil Lileep FFI 87";
  public text: string = "Look at the bottom 7 cards of your deck. You may reveal a Lileep you find there and put it onto your Bench. Shuffle the other cards back into your deck. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "searchBasicToBench:1");
    }
    return state;
  }
}
