import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class WishfulBaton_121 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "CRI";
  public name: string = "Wishful Baton";
  public fullName: string = "Wishful Baton CRI 121";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If the Pokémon this card is attached to is your Active Pokémon and is Knocked Out by damage from an opponent's attack, move up to 3 basic Energy cards from that Pokémon to 1 of your Benched Pokémon. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
