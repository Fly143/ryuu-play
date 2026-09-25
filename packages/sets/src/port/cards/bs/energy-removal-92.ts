import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class EnergyRemoval_92 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "BS";
  public name: string = "Energy Removal";
  public fullName: string = "Energy Removal BS 92";
  public text: string = "Choose 1 Energy card attached to 1 of your opponent's Pokémon and discard it.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "discardEnergyDefending:1");
    }
    return state;
  }
}
