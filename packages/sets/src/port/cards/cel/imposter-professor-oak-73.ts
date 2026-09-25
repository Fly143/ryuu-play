import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ImposterProfessorOak_73 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "CEL";
  public name: string = "Imposter Professor Oak";
  public fullName: string = "Imposter Professor Oak CEL 73";
  public text: string = "Your opponent shuffles his or her hand into his or her deck, then draws 7 cards.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "opponentShuffleDraw:7");
    }
    return state;
  }
}
