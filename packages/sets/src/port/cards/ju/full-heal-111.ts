import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class FullHeal_111 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "JU";
  public name: string = "Full Heal";
  public fullName: string = "Full Heal JU 111";
  public text: string = "Your Active Pokémon is no longer Asleep, Confused, Paralyzed, or Poisoned.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "clearSpecialConditions");
    }
    return state;
  }
}
