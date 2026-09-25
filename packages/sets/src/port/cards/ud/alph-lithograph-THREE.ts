import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class AlphLithographTHREE extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "UD";
  public name: string = "Alph Lithograph";
  public fullName: string = "Alph Lithograph UD THREE";
  public text: string = "Return any Stadium card in play to its player's hand!";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
