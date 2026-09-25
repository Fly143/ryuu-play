import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Windstorm_85 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "CG";
  public name: string = "Windstorm";
  public fullName: string = "Windstorm CG 85";
  public text: string = "Choose up to 2 in any combination of Pokémon Tool cards and Stadium cards in play (both yours and your opponent's) and discard them.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
