import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ImpostorProfessorOakSInvention_94 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "N4";
  public name: string = "Impostor Professor Oak's Invention";
  public fullName: string = "Impostor Professor Oak's Invention N4 94";
  public text: string = "Look at your opponent's Prize cards. You may have your opponent shuffle them into his or her deck. If you do, your opponent takes that many cards from the top of his or her deck and sets them aside as his or her new Prize cards (without looking at them).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
