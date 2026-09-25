import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TropicalWind_26 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "PR-NP";
  public name: string = "Tropical Wind";
  public fullName: string = "Tropical Wind PR-NP 26";
  public text: string = "Flip a coin. If heads, remove 2 damage counters from each Active Pokémon (remove 1 damage counter if a Pokémon has only 1). If tails, each Active Pokémon is now Asleep.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
