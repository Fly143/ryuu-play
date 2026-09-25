import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class RadioTower_95 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "N4";
  public name: string = "Radio Tower";
  public fullName: string = "Radio Tower N4 95";
  public text: string = "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Once during each player's turn (before attacking), that player may look at the top 2 cards of his or her deck and put them back in the same order.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
