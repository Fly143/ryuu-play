import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PowerPlant_183 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "UNM";
  public name: string = "Power Plant";
  public fullName: string = "Power Plant UNM 183";
  public text: string = "Pokémon-GX and Pokémon-EX in play (both yours and your opponent's) have no Abilities. This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
