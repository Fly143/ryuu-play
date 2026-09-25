import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class UltraForestKartenvoy_188 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "UNM";
  public name: string = "Ultra Forest Kartenvoy";
  public fullName: string = "Ultra Forest Kartenvoy UNM 188";
  public text: string = "During this turn, damage from your Ultra Beasts' attacks isn't affected by any effects on your opponent's Active Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "ignoreAllEffects");
    }
    return state;
  }
}
