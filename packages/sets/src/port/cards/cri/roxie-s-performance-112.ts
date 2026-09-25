import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class RoxieSPerformance_112 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "CRI";
  public name: string = "Roxie's Performance";
  public fullName: string = "Roxie's Performance CRI 112";
  public text: string = "During your opponent's next turn, their Poisoned Pokémon can't retreat. (This includes newly Poisoned Pokémon.)";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "cantRetreatPoisoned");
    }
    return state;
  }
}
