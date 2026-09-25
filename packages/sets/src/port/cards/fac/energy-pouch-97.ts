import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class EnergyPouch_97 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "FAC";
  public name: string = "Energy Pouch";
  public fullName: string = "Energy Pouch FAC 97";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If the Pokémon this card is attached to is Knocked Out by damage from an opponent's attack, put all basic Energy attached to that Pokémon into your hand. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
