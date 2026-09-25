import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class FullHeal_159 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "RCL";
  public name: string = "Full Heal";
  public fullName: string = "Full Heal RCL 159";
  public text: string = "Your Active Pokémon recovers from all Special Conditions. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "clearSpecialConditions");
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "clearSpecialConditions");
    }
    return state;
  }
}
