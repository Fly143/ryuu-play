import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ErikaSJigglypuff_692 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "30C";
  public name: string = "Erika's Jigglypuff";
  public fullName: string = "Erika's Jigglypuff 30C 69";
  public text: string = "Erika's Jigglypuff";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
