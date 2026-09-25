import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class CrushingHammer_60 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "GEN";
  public name: string = "Crushing Hammer";
  public fullName: string = "Crushing Hammer GEN 60";
  public text: string = "Flip a coin. If heads, discard an Energy attached to 1 of your opponent's Pokémon. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "flipHeadsDiscardEnergyOpponent");
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "flipHeadsDiscardEnergyOpponent");
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "flipHeadsDiscardEnergyOpponent");
    }
    return state;
  }
}
