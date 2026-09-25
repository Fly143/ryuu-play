import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ClawFossil_91 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "HP";
  public name: string = "Claw Fossil";
  public fullName: string = "Claw Fossil HP 91";
  public text: string = "Play Claw Fossil as if it were a Basic Pokémon. While in play, Claw Fossil counts as a Colorless Pokémon (as well as a Trainer card). Claw Fossil has no attacks of its own, can't retreat, and can't be affected by any Special Conditions. If Claw Fossil is Knocked Out, it doesn't count as a Knocked Out Pokémon. (Discard it anyway.) At any time during your turn before your attack, you may discard Claw Fossil from play.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* structural */ state;
    }
    return state;
  }
}
