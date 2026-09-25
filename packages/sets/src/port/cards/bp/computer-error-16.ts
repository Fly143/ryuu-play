import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ComputerError_16 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "BP";
  public name: string = "Computer Error";
  public fullName: string = "Computer Error BP 16";
  public text: string = "You may draw up to 5 cards, then your opponent may draw up to 5 cards. Your turn is over now (you don't get to attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.bothDraw(this, store, state, effect).playCard(effect as TrainerEffect, 5);
    }
    return state;
  }
}
