import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Sidney_264 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "EVS";
  public name: string = "Sidney";
  public fullName: string = "Sidney EVS 264";
  public text: string = "Your opponent reveals their hand. Discard up to 2 in any combination of Pokémon Tool cards, Special Energy cards, and Stadium cards from it.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
