import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class CyclingRoad_157 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "MEW";
  public name: string = "Cycling Road";
  public fullName: string = "Cycling Road MEW 157";
  public text: string = "Once during each player's turn, that player may discard a Basic Energy card from their hand in order to draw a card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
