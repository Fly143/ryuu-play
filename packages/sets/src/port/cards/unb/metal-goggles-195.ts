import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MetalGoggles_195 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "UNB";
  public name: string = "Metal Goggles";
  public fullName: string = "Metal Goggles UNB 195";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. The Metal Pokémon this card is attached to takes 30 less damage from your opponent's attacks (after applying Weakness and Resistance), and your opponent's attacks and Abilities can't put damage counters on it. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* reduceDamageMarker:30 */ state;
    }
    return state;
  }
}
