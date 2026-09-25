import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class FuchsiaCityGym_114 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "G2";
  public name: string = "Fuchsia City Gym";
  public fullName: string = "Fuchsia City Gym G2 114";
  public text: string = "This card stays in play after being played. Discard this card if another Stadium card comes into play. Once during each player's turn (before attacking), that player may flip a coin. If heads, that player may shuffle 1 of his or her Pokémon in play with Koga in its name and any cards attached to it into his or her deck.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
