import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class RedeemableTicket_156 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "JTG";
  public name: string = "Redeemable Ticket";
  public fullName: string = "Redeemable Ticket JTG 156";
  public text: string = "Count your Prize cards, shuffle them, and put them on the bottom of your deck. Then, take that many cards from the top of your deck and put them face down as your Prize cards. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
