import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class RootFossil_92 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "SS";
  public name: string = "Root Fossil";
  public fullName: string = "Root Fossil SS 92";
  public text: string = "Play Root Fossil as if it were a Basic Pokémon. While in play, Root Fossil counts as a Colorless Pokémon (instead of a Trainer card). Root Fossil has no attacks of its own, can't retreat, and can't be affected by any Special Conditions. If Root Fossil is Knocked Out, it doesn't count as a Knocked Out Pokémon. (Discard it anyway.) At any time during your turn before your attack, you may discard Root Fossil from play.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "fossilBody");
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "fossilBody");
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "fossilBody");
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "fossilBody");
    }
    return state;
  }
}
