import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TheRocketSTrainingGym_104 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "G1";
  public name: string = "The Rocket's Training Gym";
  public fullName: string = "The Rocket's Training Gym G1 104";
  public text: string = "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Each player pays Colorless more to retreat his or her Active Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
