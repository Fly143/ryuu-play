import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class VermilionCityGym_120 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "G1";
  public name: string = "Vermilion City Gym";
  public fullName: string = "Vermilion City Gym G1 120";
  public text: string = "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Whenever a player attacks with a Pokémon with Lt. Surge in its name, he or she may flip a coin. If heads, and if that Pokémon's attack does damage to the Defending Pokémon (after applying Weakness and Resistance), that attack does 10 more damage to the Defending Pokémon. If tails, the attacking Pokémon does 10 damage to itself in addition to whatever its attack usually does.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
