import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MistySWish_108 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "G2";
  public name: string = "Misty's Wish";
  public fullName: string = "Misty's Wish G2 108";
  public text: string = "Look at 1 of your Prize cards. Then, ask your opponent if you may switch that card with 1 of the cards in your hand. If your opponent accepts and if you have any other cards in your hand, switch those cards. If your opponent declines, return the Prize card face down and draw a card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
