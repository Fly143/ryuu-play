import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class DoubleFullHeal_105 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "DP";
  public name: string = "Double Full Heal";
  public fullName: string = "Double Full Heal DP 105";
  public text: string = "Remove all Special Conditions from each of your Active Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "clearSpecialConditions");
    }
    return state;
  }
}
