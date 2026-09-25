import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ViridianCityGym_123 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "G2";
  public name: string = "Viridian City Gym";
  public fullName: string = "Viridian City Gym G2 123";
  public text: string = "This card stays in play after being played. Discard this card if another Stadium card comes into play. Whenever a Pokémon with Giovanni in its name evolves, its owner removes 2 damage counters from that Pokémon (or 1 if it only has 1).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
