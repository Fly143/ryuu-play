import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Eviolite_122 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "PLB";
  public name: string = "Eviolite";
  public fullName: string = "Eviolite PLB 122";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If the Pokémon this card is attached to is a Basic Pokémon, any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance). You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* reduceDamageMarker:20 */ state;
    }
    return state;
  }
}
