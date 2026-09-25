import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class FullHeal_95 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "BW";
  public name: string = "Full Heal";
  public fullName: string = "Full Heal BW 95";
  public text: string = "Remove all Special Conditions from your Active Pokémon. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "clearSpecialConditions");
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "clearSpecialConditions");
    }
    return state;
  }
}
