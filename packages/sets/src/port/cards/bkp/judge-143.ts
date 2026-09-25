import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Judge_143 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "BKP";
  public name: string = "Judge";
  public fullName: string = "Judge BKP 143";
  public text: string = "Each player shuffles his or her hand into his or her deck and draws 4 cards.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* bothShuffleDraw:4 */ state;
    }
    return state;
  }
}
