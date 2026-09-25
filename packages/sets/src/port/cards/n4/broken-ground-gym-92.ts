import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class BrokenGroundGym_92 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "N4";
  public name: string = "Broken Ground Gym";
  public fullName: string = "Broken Ground Gym N4 92";
  public text: string = "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Each player pays Colorless more to retreat a Baby Pokémon or Basic Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
