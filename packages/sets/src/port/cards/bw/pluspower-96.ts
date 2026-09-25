import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PlusPower_96 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "BW";
  public name: string = "PlusPower";
  public fullName: string = "PlusPower BW 96";
  public text: string = "During this turn, your Pokémon's attacks do 10 more damage to the Active Pokémon (before applying Weakness and Resistance). You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "plusPowerMarker");
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "plusPowerMarker");
    }
    return state;
  }
}
