import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PerilousJungle_156 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "TEF";
  public name: string = "Perilous Jungle";
  public fullName: string = "Perilous Jungle TEF 156";
  public text: string = "During Pokémon Checkup, put 2 more damage counters on each Poisoned non-Darkness Pokémon (both yours and your opponent's).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
