import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class FirstTicket_19 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "DRV";
  public name: string = "First Ticket";
  public fullName: string = "First Ticket DRV 19";
  public text: string = "Before you flip a coin to decide who goes first in a game, you may play this card. Don't flip that coin, and you go first. If both players play First Ticket, flip the coin as normal. (You may play only 1 First Ticket before you flip that coin.) You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
