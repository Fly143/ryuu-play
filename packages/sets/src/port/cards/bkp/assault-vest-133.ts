import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class AssaultVest_133 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "BKP";
  public name: string = "Assault Vest";
  public fullName: string = "Assault Vest BKP 133";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. Any damage done to the Pokémon this card is attached to by attacks from your opponent's Pokémon that have any Special Energy attached to them is reduced by 40 (after applying Weakness and Resistance). You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* reduceDamageMarker:40 */ state;
    }
    return state;
  }
}
