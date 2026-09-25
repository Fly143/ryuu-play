import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class CeruleanCityGym_108 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "G1";
  public name: string = "Cerulean City Gym";
  public fullName: string = "Cerulean City Gym G1 108";
  public text: string = "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Each player pays Colorless less to retreat his or her Pokémon if it has Misty in its name.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
