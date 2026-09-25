import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class AcerolaSPremonition_129 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "FST";
  public name: string = "Acerola's Premonition";
  public fullName: string = "Acerola's Premonition FST 129";
  public text: string = "Your opponent reveals their hand, and you draw a card for each Trainer card you find there.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
