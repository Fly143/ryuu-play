import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class CoverFossil_79 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "FFI";
  public name: string = "Cover Fossil";
  public fullName: string = "Cover Fossil FFI 79";
  public text: string = "Look at the bottom 7 cards of your deck. You may reveal a Tirtouga you find there and put it onto your Bench. Shuffle the other cards back into your deck. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "fossilBody");
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "fossilBody");
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "fossilBody");
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "fossilBody");
    }
    return state;
  }
}
