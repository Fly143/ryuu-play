import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class EnergySwitch_173 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "SVI";
  public name: string = "Energy Switch";
  public fullName: string = "Energy Switch SVI 173";
  public text: string = "Move a Basic Energy from 1 of your Pokémon to another of your Pokémon. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "moveEnergyBetweenMine");
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "moveEnergyBetweenMine");
    }
    return state;
  }
}
