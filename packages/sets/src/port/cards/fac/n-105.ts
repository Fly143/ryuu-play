import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class N_105 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "FAC";
  public name: string = "N";
  public fullName: string = "N FAC 105";
  public text: string = "Each player shuffles his or her hand into his or her deck. Then, each player draws a card for each of his or her remaining Prize cards.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* bothShuffleDraw:4 */ state;
    }
    return state;
  }
}
