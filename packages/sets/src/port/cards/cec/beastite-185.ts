import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Beastite_185 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "CEC";
  public name: string = "Beastite";
  public fullName: string = "Beastite CEC 185";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. The attacks of the Ultra Beast this card is attached to do 10 more damage to your opponent's Active Pokémon for each Prize card you have taken (before applying Weakness and Resistance). You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* plusPowerMarker:10 */ state;
    }
    return state;
  }
}
