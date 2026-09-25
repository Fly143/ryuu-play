import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Lacey_166 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "SCR";
  public name: string = "Lacey";
  public fullName: string = "Lacey SCR 166";
  public text: string = "Shuffle your hand into your deck. Then, draw 4 cards. If your opponent has 3 or fewer Prize cards remaining, draw 8 cards instead.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "shuffleDraw:4");
    }
    return state;
  }
}
