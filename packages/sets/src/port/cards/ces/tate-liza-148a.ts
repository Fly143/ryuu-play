import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TateLiza_148a extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "CES";
  public name: string = "Tate & Liza";
  public fullName: string = "Tate & Liza CES 148a";
  public text: string = "Choose 1: • Shuffle your hand into your deck then draw 5 cards. • Switch your Active Pokémon with 1 of your Benched Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "shuffleDraw:5");
    }
    return state;
  }
}
