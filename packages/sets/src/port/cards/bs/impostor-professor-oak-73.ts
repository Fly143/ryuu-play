import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ImpostorProfessorOak_73 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "BS";
  public name: string = "Impostor Professor Oak";
  public fullName: string = "Impostor Professor Oak BS 73";
  public text: string = "Your opponent shuffles his or her hand into his or her deck, then draws 7 cards.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* opponentShuffleDraw:7 */ state;
    }
    return state;
  }
}
