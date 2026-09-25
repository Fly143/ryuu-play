import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ParasolLady_238 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "PAR";
  public name: string = "Parasol Lady";
  public fullName: string = "Parasol Lady PAR 238";
  public text: string = "Shuffle your hand into your deck. Then, draw 4 cards. If you go second and it's your first turn, draw 8 cards instead.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "shuffleDraw:4");
    }
    return state;
  }
}
