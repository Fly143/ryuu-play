import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ReservedTicket_147 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "BKP";
  public name: string = "Reserved Ticket";
  public fullName: string = "Reserved Ticket BKP 147";
  public text: string = "Flip a coin. If heads, search your deck for a card, shuffle your deck, then put that card on top of it. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
