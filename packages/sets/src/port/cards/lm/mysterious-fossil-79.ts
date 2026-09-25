import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MysteriousFossil_79 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "LM";
  public name: string = "Mysterious Fossil";
  public fullName: string = "Mysterious Fossil LM 79";
  public text: string = "Play Mysterious Fossil as if it were a Basic Pokémon. While in play, Mysterious Fossil counts as a Colorless Pokémon (as well as a Trainer card). Mysterious Fossil has no attacks of its own, can't retreat, and can't be affected by any Special Conditions. If Mysterious Fossil is Knocked Out, it doesn't count as a Knocked Out Pokémon. (Discard it anyway.) At any time during your turn before your attack, you may discard Mysterious Fossil from play.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "fossilBody");
    }
    return state;
  }
}
