import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class HelixFossil_93 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "AR";
  public name: string = "Helix Fossil";
  public fullName: string = "Helix Fossil AR 93";
  public text: string = "Play Helix Fossil as if it were a Colorless Basic Pokémon. (Helix Fossil counts as a Trainer card as well, but if Helix Fossil is Knocked Out, this counts as a Knocked Out Pokémon.) Helix Fossil can't be affected by any Special Conditions and can't retreat. At any time during your turn before your attack, you may discard Helix Fossil from play. (This doesn't count as a Knocked Out Pokémon.)";

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
