import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class CrushingGloves_133 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "BST";
  public name: string = "Crushing Gloves";
  public fullName: string = "Crushing Gloves BST 133";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached. The attacks of the Pokémon this card is attached to do 30 more damage to your opponent's Active Metal Pokémon (before applying Weakness and Resistance). You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* plusPowerMarker:30 */ state;
    }
    return state;
  }
}
