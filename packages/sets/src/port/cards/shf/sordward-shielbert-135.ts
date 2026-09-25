import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class SordwardShielbert_135 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "SHF";
  public name: string = "Sordward & Shielbert";
  public fullName: string = "Sordward & Shielbert SHF 135";
  public text: string = "Choose a Trainer card from your discard pile. Then, ask your opponent if you may put it into your hand. If yes, put that card into your hand. If no, draw 3 cards.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
