import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class RustedSword_62 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "SHF";
  public name: string = "Rusted Sword";
  public fullName: string = "Rusted Sword SHF 62";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached. The attacks of the Zacian V this card is attached to do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance). You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* plusPowerMarker:30 */ state;
    }
    return state;
  }
}
