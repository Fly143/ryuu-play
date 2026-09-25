import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class SpecialRedCard_113 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "CRI";
  public name: string = "Special Red Card";
  public fullName: string = "Special Red Card CRI 113";
  public text: string = "You can use this card only if your opponent has 3 or fewer Prize cards remaining. Your opponent shuffles their hand and puts it on the bottom of their deck. If they put any cards on the bottom of their deck in this way, they draw 3 cards.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "shuffleHandToBottomDraw:3:2");
    }
    return state;
  }
}
