import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class GiantBomb_251 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "CEC";
  public name: string = "Giant Bomb";
  public fullName: string = "Giant Bomb CEC 251";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If this card is attached to 1 of your Pokémon, discard it at the end of your opponent's turn. If the Pokémon this card is attached to is your Active Pokémon and takes 180 or more damage from an opponent's attack (even if this Pokémon is Knocked Out), put 10 damage counters on the Attacking Pokémon. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
