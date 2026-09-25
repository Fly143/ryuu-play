import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Bea_180 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "VIV";
  public name: string = "Bea";
  public fullName: string = "Bea VIV 180";
  public text: string = "Discard the top 5 cards of your deck, and attach any Energy cards you discarded in this way to your Benched Fighting Pokémon in any way you like.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "millSelf:5");
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "attachBasicFromDiscardToBench:2");
    }
    return state;
  }
}
