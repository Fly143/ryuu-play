import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class RescueScarf_115 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "BCR";
  public name: string = "Rescue Scarf";
  public fullName: string = "Rescue Scarf BCR 115";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If the Pokémon this card is attached to is Knocked Out by damage from an attack, put that Pokémon into your hand. (Discard all cards attached to that Pokémon.) You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
