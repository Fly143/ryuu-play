import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class CinnabarCityGym_113 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "G2";
  public name: string = "Cinnabar City Gym";
  public fullName: string = "Cinnabar City Gym G2 113";
  public text: string = "This card stays in play after being played. Discard this card if another Stadium card comes into play. Ignore Weakness when a Water Pokémon does damage to a Pokémon with Blaine in its name.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
