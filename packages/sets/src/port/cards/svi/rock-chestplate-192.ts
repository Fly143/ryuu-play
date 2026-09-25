import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class RockChestplate_192 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "SVI";
  public name: string = "Rock Chestplate";
  public fullName: string = "Rock Chestplate SVI 192";
  public text: string = "The Fighting Pokémon this card is attached to takes 30 less damage from attacks from your opponent's Pokémon (after applying Weakness and Resistance). Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* reduceDamageSelf:30 */ state;
    }
    return state;
  }
}
