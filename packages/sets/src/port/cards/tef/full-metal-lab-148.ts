import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class FullMetalLab_148 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "TEF";
  public name: string = "Full Metal Lab";
  public fullName: string = "Full Metal Lab TEF 148";
  public text: string = "Metal Pokémon (both yours and your opponent's) take 30 less damage from attacks from the opponent's Pokémon (after applying Weakness and Resistance).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "reduceDamageSelf:30");
    }
    return state;
  }
}
