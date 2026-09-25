import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ShoppingCenter_157 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "CRE";
  public name: string = "Shopping Center";
  public fullName: string = "Shopping Center CRE 157";
  public text: string = "Once during each player's turn, that player may put a Pokémon Tool attached to 1 of their Pokémon into their hand.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
