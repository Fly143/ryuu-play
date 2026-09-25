import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MagneticStorm_91 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "HL";
  public name: string = "Magnetic Storm";
  public fullName: string = "Magnetic Storm HL 91";
  public text: string = "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Any damage done by attacks from Psychic Pokémon and Fighting Pokémon (both yours and your opponent's) is not affected by Resistance.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
