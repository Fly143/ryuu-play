import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class AlphLithographONE extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "HS";
  public name: string = "Alph Lithograph";
  public fullName: string = "Alph Lithograph HS ONE";
  public text: string = "Look at your opponent's hand!";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
