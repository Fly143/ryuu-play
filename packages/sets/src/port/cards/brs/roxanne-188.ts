import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Roxanne_188 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "BRS";
  public name: string = "Roxanne";
  public fullName: string = "Roxanne BRS 188";
  public text: string = "You can use this card only if your opponent has 3 or fewer Prize cards remaining. Each player shuffles their hand into their deck. Then, you draw 6 cards, and your opponent draws 2 cards.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "bothShuffleDraw:4");
    }
    return state;
  }
}
