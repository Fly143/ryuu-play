import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class BurnedTower_71 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "UD";
  public name: string = "Burned Tower";
  public fullName: string = "Burned Tower UD 71";
  public text: string = "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card. Once during each player's turn, that player may flip a coin. If heads, the player searches his or her discard pile for a basic Energy card, shows it to his or her opponent, and put it into his or her hand.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
