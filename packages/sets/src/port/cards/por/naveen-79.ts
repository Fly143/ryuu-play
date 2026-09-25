import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Naveen_79 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "POR";
  public name: string = "Naveen";
  public fullName: string = "Naveen POR 79";
  public text: string = "Draw cards until you have 5 cards in your hand. Before drawing cards, you may discard any number of cards from your hand. (If you can't draw any cards in this way, you can't use this card.)";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.drawUntilHand(this, store, state, effect).playCard(effect as TrainerEffect, 5);
    }
    return state;
  }
}
