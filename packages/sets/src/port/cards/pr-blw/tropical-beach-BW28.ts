import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TropicalBeachBW28 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "PR-BLW";
  public name: string = "Tropical Beach";
  public fullName: string = "Tropical Beach PR-BLW BW28";
  public text: string = "Once during each player's turn, that player may draw cards until he or she has 7 cards in his or her hand. If he or she does, that player's turn ends. This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
