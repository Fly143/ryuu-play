import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ProfessorElm_96 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "N1";
  public name: string = "Professor Elm";
  public fullName: string = "Professor Elm N1 96";
  public text: string = "Shuffle your hand into your deck. Then, draw 7 cards. You can't play any more Trainer cards this turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* shuffleDraw:7 */ state;
    }
    return state;
  }
}
