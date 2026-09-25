import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class CrushingHammer_125 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "CRZ";
  public name: string = "Crushing Hammer";
  public fullName: string = "Crushing Hammer CRZ 125";
  public text: string = "Flip a coin. If heads, discard an Energy from 1 of your opponent's Pokémon. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "flipHeadsDiscardEnergyOpponent");
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "flipHeadsDiscardEnergyOpponent");
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "flipHeadsDiscardEnergyOpponent");
    }
    return state;
  }
}
