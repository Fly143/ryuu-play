import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class NBW100 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "PR-BLW";
  public name: string = "N";
  public fullName: string = "N PR-BLW BW100";
  public text: string = "Each player shuffles his or her hand into his or her deck. Then, each player draws a card for each of his or her remaining Prize cards.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* bothShuffleDraw:4 */ state;
    }
    return state;
  }
}
