import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ProfessorJuniper_116 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "FLF";
  public name: string = "Professor Juniper";
  public fullName: string = "Professor Juniper FLF 116";
  public text: string = "Discard your hand and draw 7 cards.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.discardHandDraw(this, store, state, effect).playCard(effect as TrainerEffect, 7);
    }
    return state;
  }
}
