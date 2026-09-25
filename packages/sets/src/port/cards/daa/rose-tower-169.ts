import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class RoseTower_169 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "DAA";
  public name: string = "Rose Tower";
  public fullName: string = "Rose Tower DAA 169";
  public text: string = "Once during each player's turn, that player may draw cards until they have 3 cards in their hand. This Stadium stays in play when you play it. Discard it if another Stadium comes into play. If a Stadium with the same name is in play, you can't play this card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
