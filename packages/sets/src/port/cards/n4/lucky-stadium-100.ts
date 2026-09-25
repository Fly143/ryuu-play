import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class LuckyStadium_100 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "N4";
  public name: string = "Lucky Stadium";
  public fullName: string = "Lucky Stadium N4 100";
  public text: string = "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Once during each player's turn (before attacking), that player may flip a coin. If heads, that player draws a card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
