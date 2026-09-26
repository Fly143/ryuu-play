import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class SuperEnergyRemoval2_134 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "AQ";
  public name: string = "Super Energy Removal 2";
  public fullName: string = "Super Energy Removal 2 AQ 134";
  public text: string = "Flip 2 coins. If both are heads, discard all Energy cards attached to the Defending Pokémon. If both are tails, discard all Energy cards attached to your Active Pokémon. If 1 is heads and 1 is tails, this card does nothing.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "discardEnergyDefending:99");
    }
    return state;
  }
}
