import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class BurningScarf_155 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "RCL";
  public name: string = "Burning Scarf";
  public fullName: string = "Burning Scarf RCL 155";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached. If the Fire Pokémon this card is attached to is in the Active Spot and is damaged by an opponent's attack (even if it is Knocked Out), the Attacking Pokémon is now Burned. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
