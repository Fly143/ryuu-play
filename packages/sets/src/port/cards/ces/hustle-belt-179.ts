import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class HustleBelt_179 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "CES";
  public name: string = "Hustle Belt";
  public fullName: string = "Hustle Belt CES 179";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If the Pokémon this card is attached to has 30 HP or less remaining and has any damage counters on it, its attacks do 60 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance). You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* plusPowerMarker:60 */ state;
    }
    return state;
  }
}
