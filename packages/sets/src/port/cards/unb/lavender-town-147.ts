import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class LavenderTown_147 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "UNB";
  public name: string = "Lavender Town";
  public fullName: string = "Lavender Town UNB 147";
  public text: string = "Once during each player's turn, that player may have their opponent reveal their hand. This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
