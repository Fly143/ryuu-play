import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ResearchRecord_84 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "CL";
  public name: string = "Research Record";
  public fullName: string = "Research Record CL 84";
  public text: string = "Look at the top 4 cards of your deck and put as many of them as you like back on top of your deck in any order. Then, put the remaining cards on the bottom of your deck in any order.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "pokedex");
    }
    return state;
  }
}
