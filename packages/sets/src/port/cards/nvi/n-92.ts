import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class N_92 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "NVI";
  public name: string = "N";
  public fullName: string = "N NVI 92";
  public text: string = "Each player shuffles his or her hand into his or her deck. Then, each player draws a card for each of his or her remaining Prize cards.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "bothShuffleDraw:4");
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "bothShuffleDraw:4");
    }
    return state;
  }
}
