import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MaximumBelt_154 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "TEF";
  public name: string = "Maximum Belt";
  public fullName: string = "Maximum Belt TEF 154";
  public text: string = "Attacks used by the Pokémon this card is attached to do 50 more damage to your opponent's Active Pokémon ex (before applying Weakness and Resistance). You may attach any number of Pokémon Tools to your Pokémon during your turn. You may attach only 1 Pokémon Tool to each Pokémon, and it stays attached.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
