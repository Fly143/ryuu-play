import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class GymBadgeXY205 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "PR-XY";
  public name: string = "Gym Badge";
  public fullName: string = "Gym Badge PR-XY XY205";
  public text: string = "Flip a coin until you get tails. For each heads, draw a card. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* flipsDrawPerHeads:20 */ state;
    }
    return state;
  }
}
