import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MooMooMilk_101 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "N1";
  public name: string = "Moo-Moo Milk";
  public fullName: string = "Moo-Moo Milk N1 101";
  public text: string = "Choose 1 of your Pokémon. Flip 2 coins. Remove 2 damage counters times the number of heads from that Pokémon. If the Pokémon has fewer damage counters than that, remove all of them.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
