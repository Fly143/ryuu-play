import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PewterCityGym_115 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "G1";
  public name: string = "Pewter City Gym";
  public fullName: string = "Pewter City Gym G1 115";
  public text: string = "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Don't apply Resistance to any attacks made by Pokémon with Brock in their names.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
