import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PowerTree_76 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "LM";
  public name: string = "Power Tree";
  public fullName: string = "Power Tree LM 76";
  public text: string = "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card. Once during each player's turn, if the player has no Special Energy cards in his or her discard pile, that player searches his or her discard pile for a basic Energy card, show it to the opponent, and put it into his or her hand.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
