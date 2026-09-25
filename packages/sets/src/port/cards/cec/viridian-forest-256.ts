import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ViridianForest_256 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "CEC";
  public name: string = "Viridian Forest";
  public fullName: string = "Viridian Forest CEC 256";
  public text: string = "Once during each player's turn, that player may discard a card from their hand. If they do, that player searches their deck for a basic Energy card, reveals it, and puts it into their hand. Then, that player shuffles their deck. This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
