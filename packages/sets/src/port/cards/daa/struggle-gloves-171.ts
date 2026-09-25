import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class StruggleGloves_171 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "DAA";
  public name: string = "Struggle Gloves";
  public fullName: string = "Struggle Gloves DAA 171";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached. If the Pokémon this card is attached to has Weakness to your opponent's Active Pokémon's type, its attacks do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance). You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* plusPowerMarker:30 */ state;
    }
    return state;
  }
}
