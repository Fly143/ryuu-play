import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class GymBadgeXY207 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "PR-XY";
  public name: string = "Gym Badge";
  public fullName: string = "Gym Badge PR-XY XY207";
  public text: string = "Flip a coin until you get tails. For each heads, draw a card. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "flipsDrawPerHeads:20");
    }
    return state;
  }
}
