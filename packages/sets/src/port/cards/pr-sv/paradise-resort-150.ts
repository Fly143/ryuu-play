import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ParadiseResort_150 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "PR-SV";
  public name: string = "Paradise Resort";
  public fullName: string = "Paradise Resort PR-SV 150";
  public text: string = "The Retreat Cost of each Psyduck in play (both yours and your opponent's) is Colorless less.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
