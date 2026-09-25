import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Leon_154 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "VIV";
  public name: string = "Leon";
  public fullName: string = "Leon VIV 154";
  public text: string = "During this turn, your Pokémon's attacks do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "plusPowerMarker:30");
    }
    return state;
  }
}
