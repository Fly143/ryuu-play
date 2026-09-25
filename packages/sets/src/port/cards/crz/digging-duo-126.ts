import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class DiggingDuo_126 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "CRZ";
  public name: string = "Digging Duo";
  public fullName: string = "Digging Duo CRZ 126";
  public text: string = "Flip a coin. If heads, look at the bottom 8 cards of your deck and put 1 of them into your hand. If tails, look at the bottom 3 cards of your deck and put 1 of them into your hand. Shuffle the other cards back into your deck.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
