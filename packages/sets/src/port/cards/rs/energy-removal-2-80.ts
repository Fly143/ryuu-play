import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class EnergyRemoval2_80 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "RS";
  public name: string = "Energy Removal 2";
  public fullName: string = "Energy Removal 2 RS 80";
  public text: string = "Flip a coin. If heads, choose 1 Energy card attached to 1 of your opponent's Pokémon and discard it.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "discardEnergyDefending:1");
    }
    return state;
  }
}
