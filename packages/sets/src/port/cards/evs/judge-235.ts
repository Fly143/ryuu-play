import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Judge_235 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "EVS";
  public name: string = "Judge";
  public fullName: string = "Judge EVS 235";
  public text: string = "Each player shuffles their hand into their deck and draws 4 cards.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* bothShuffleDraw:4 */ state;
    }
    return state;
  }
}
