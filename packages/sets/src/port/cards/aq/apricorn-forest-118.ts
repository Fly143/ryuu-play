import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ApricornForest_118 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "AQ";
  public name: string = "Apricorn Forest";
  public fullName: string = "Apricorn Forest AQ 118";
  public text: string = "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Once during each player's turn (before attacking), if that player's Bench isn't full, that player flips a coin. If heads, that player shows his or her opponent a basic Energy card from his or her hand. Then, that player searches his or her deck for a Basic Pokémon card of the same type (color) as the revealed Energy card and puts it onto his or her Bench. The player shuffles his or her deck afterward.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
