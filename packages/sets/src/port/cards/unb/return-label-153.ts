import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ReturnLabel_153 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "UNB";
  public name: string = "Return Label";
  public fullName: string = "Return Label UNB 153";
  public text: string = "Put a card from your opponent's discard pile on the bottom of their deck. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
