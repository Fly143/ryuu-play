import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class SparklingRobe_99 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "FFI";
  public name: string = "Sparkling Robe";
  public fullName: string = "Sparkling Robe FFI 99";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. The Pokémon this card is attached to can't be affected by any Special Conditions. (Remove any Special Conditions affecting that Pokémon.) You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
