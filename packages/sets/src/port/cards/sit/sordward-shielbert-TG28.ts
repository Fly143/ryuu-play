import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class SordwardShielbertTG28 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "SIT";
  public name: string = "Sordward & Shielbert";
  public fullName: string = "Sordward & Shielbert SIT TG28";
  public text: string = "Choose a Trainer card from your discard pile. Then, ask your opponent if you may put it into your hand. If yes, put that card into your hand. If no, draw 3 cards.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
