import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PeekingRedCard_169 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "UPR";
  public name: string = "Peeking Red Card";
  public fullName: string = "Peeking Red Card UPR 169";
  public text: string = "Your opponent reveals their hand. You may have your opponent count the cards in their hand, shuffle those cards into their deck, then draw that many cards. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
