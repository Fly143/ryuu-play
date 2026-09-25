import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class DarkClaw_92 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "DRX";
  public name: string = "Dark Claw";
  public fullName: string = "Dark Claw DRX 92";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If this card is attached to a Darkness Pokémon, each of the attacks of that Pokémon does 20 more damage to the Active Pokémon (before applying Weakness and Resistance). You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* plusPowerMarker:20 */ state;
    }
    return state;
  }
}
