import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class RedCard_124 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "XY";
  public name: string = "Red Card";
  public fullName: string = "Red Card XY 124";
  public text: string = "Your opponent shuffles his or her hand into his or her deck and draws 4 cards. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
