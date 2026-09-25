import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Riley_166 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "ASR";
  public name: string = "Riley";
  public fullName: string = "Riley ASR 166";
  public text: string = "Reveal the top 5 cards of your deck and have your opponent choose 2 of them. Discard the chosen cards and put the remaining cards into your hand.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
