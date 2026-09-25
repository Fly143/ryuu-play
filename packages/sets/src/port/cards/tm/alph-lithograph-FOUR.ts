import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class AlphLithographFOUR extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "TM";
  public name: string = "Alph Lithograph";
  public fullName: string = "Alph Lithograph TM FOUR";
  public text: string = "LOOK AT ALL OF YOUR FACE DOWN PRIZE CARDS!";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
