import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PremiumPowerPro_199 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "ASC";
  public name: string = "Premium Power Pro";
  public fullName: string = "Premium Power Pro ASC 199";
  public text: string = "During this turn, attacks used by your Fighting Pokémon do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance). You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "plusPowerMarker:30");
    }
    return state;
  }
}
