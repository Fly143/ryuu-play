import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class AltarOfTheMoone_117 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "GRI";
  public name: string = "Altar of the Moone";
  public fullName: string = "Altar of the Moone GRI 117";
  public text: string = "The Retreat Cost of each Pokémon (both yours and your opponent's) that has any Psychic or Darkness Energy attached to it is ColorlessColorless less. This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
