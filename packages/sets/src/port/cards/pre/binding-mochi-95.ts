import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class BindingMochi_95 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "PRE";
  public name: string = "Binding Mochi";
  public fullName: string = "Binding Mochi PRE 95";
  public text: string = "Attacks used by the Poisoned Pokémon this card is attached to do 40 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance). You may attach any number of Pokémon Tools to your Pokémon during your turn. You may attach only 1 Pokémon Tool to each Pokémon, and it stays attached.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
