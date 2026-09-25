import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class RescueBoard_159 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "TEF";
  public name: string = "Rescue Board";
  public fullName: string = "Rescue Board TEF 159";
  public text: string = "The Retreat Cost of the Pokémon this card is attached to is Colorless less. If that Pokémon's remaining HP is 30 or less, it has no Retreat Cost. You may attach any number of Pokémon Tools to your Pokémon during your turn. You may attach only 1 Pokémon Tool to each Pokémon, and it stays attached.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
