import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class HighPressureSystem_10 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "POP3";
  public name: string = "High Pressure System";
  public fullName: string = "High Pressure System POP3 10";
  public text: string = "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card. Each player pays Colorless less to retreat his or her Fire and Water Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
