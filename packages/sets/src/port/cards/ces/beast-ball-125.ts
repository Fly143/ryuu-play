import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class BeastBall_125 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "CES";
  public name: string = "Beast Ball";
  public fullName: string = "Beast Ball CES 125";
  public text: string = "Look at your face-down Prize cards. You may reveal an Ultra Beast card you find there, put it into your hand, and put this Beast Ball in its place. (If you don't reveal an Ultra Beast card, put this card in the discard pile.) Then, shuffle your face-down Prize cards. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
