import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class AceTrainer_69 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "BKT";
  public name: string = "Ace Trainer";
  public fullName: string = "Ace Trainer BKT 69";
  public text: string = "You can play this card only if you have more Prize cards left than your opponent. Each player shuffles his or her hand into his or her deck. Then, draw 6 cards. Your opponent draws 3 cards.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "bothShuffleDraw:6");
    }
    return state;
  }
}
