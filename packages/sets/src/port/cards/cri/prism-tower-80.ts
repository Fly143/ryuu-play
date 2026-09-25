import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PrismTower_80 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "CRI";
  public name: string = "Prism Tower";
  public fullName: string = "Prism Tower CRI 80";
  public text: string = "Once during each player's turn, that player may discard 2 cards from their hand in order to draw a card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
