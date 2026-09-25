import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class KogaSTrap_177 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "UNM";
  public name: string = "Koga's Trap";
  public fullName: string = "Koga's Trap UNM 177";
  public text: string = "Your opponent's Active Pokémon is now Confused and Poisoned.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "specialBoth:CONFUSED");
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "specialBoth:POISONED");
    }
    return state;
  }
}
