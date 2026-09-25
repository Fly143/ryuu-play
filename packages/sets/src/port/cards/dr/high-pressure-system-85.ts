import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class HighPressureSystem_85 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "DR";
  public name: string = "High Pressure System";
  public fullName: string = "High Pressure System DR 85";
  public text: string = "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Each player pays Colorless less to retreat his or her Fire and Water Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
