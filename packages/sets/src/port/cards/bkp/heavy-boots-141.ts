import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class HeavyBoots_141 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "BKP";
  public name: string = "Heavy Boots";
  public fullName: string = "Heavy Boots BKP 141";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If the Retreat Cost of the Pokémon this card is attached to is 3 or more, that Pokémon gets +20 HP and can't be Confused. (If that Pokémon is currently Confused, remove that Special Condition.) You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* structural */ state;
    }
    return state;
  }
}
