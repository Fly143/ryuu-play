import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class EnergySwitch_1072 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "PBL";
  public name: string = "Energy Switch";
  public fullName: string = "Energy Switch PBL 107";
  public text: string = "Move a Basic Energy from 1 of your Pokémon to another of your Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "moveEnergyBetweenMine");
    }
    return state;
  }
}
