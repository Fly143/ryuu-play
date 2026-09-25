import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class AetherParadiseConservationArea_116 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "GRI";
  public name: string = "Aether Paradise Conservation Area";
  public fullName: string = "Aether Paradise Conservation Area GRI 116";
  public text: string = "Basic Grass and Basic Lightning Pokémon (both yours and your opponent's) take 30 less damage from the opponent's attacks (after applying Weakness and Resistance). This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
