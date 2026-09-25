import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MagneticStorm_912 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "FLF";
  public name: string = "Magnetic Storm";
  public fullName: string = "Magnetic Storm FLF 91";
  public text: string = "Each Pokémon in play has no Resistance. This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
