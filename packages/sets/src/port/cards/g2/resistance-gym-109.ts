import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ResistanceGym_109 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "G2";
  public name: string = "Resistance Gym";
  public fullName: string = "Resistance Gym G2 109";
  public text: string = "This card stays in play after being played. Discard this card if another Stadium card comes into play. Each Pokémon's Resistance is reduced by 20. (If a Pokémon's Resistance is -30, it becomes -10.)";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
