import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ClawFossil_138 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "SF";
  public name: string = "Claw Fossil";
  public fullName: string = "Claw Fossil SF 138";
  public text: string = "Play Claw Fossil as if it were a Colorless Basic Pokémon. (Claw Fossil counts as a Trainer card as well, but if Claw Fossil is Knocked Out, this counts as a Knocked Out Pokémon.) Claw Fossil can't be affected by any Special Conditions and can't retreat. At any time during your turn before your attack, you may discard Claw Fossil from play. (This doesn't count as a Knocked Out Pokémon.)";

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
