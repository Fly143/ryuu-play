import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class VitalityBand_197 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "SVI";
  public name: string = "Vitality Band";
  public fullName: string = "Vitality Band SVI 197";
  public text: string = "The attacks of the Pokémon this card is attached to do 10 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance). Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* plusPowerMarker:30 */ state;
    }
    return state;
  }
}
