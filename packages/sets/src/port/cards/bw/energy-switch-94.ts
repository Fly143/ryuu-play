import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class EnergySwitch_94 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "BW";
  public name: string = "Energy Switch";
  public fullName: string = "Energy Switch BW 94";
  public text: string = "Move a basic Energy from 1 of your Pokémon to another of your Pokémon. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "moveEnergyBetweenMine");
    }
    return state;
  }
}
