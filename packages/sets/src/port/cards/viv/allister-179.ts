import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Allister_179 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "VIV";
  public name: string = "Allister";
  public fullName: string = "Allister VIV 179";
  public text: string = "Draw 3 cards. If you drew any cards in this way, discard up to 3 cards from your hand. (You must discard at least 1 card.)";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
