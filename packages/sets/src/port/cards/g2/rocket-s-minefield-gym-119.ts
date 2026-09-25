import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class RocketSMinefieldGym_119 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "G2";
  public name: string = "Rocket's Minefield Gym";
  public fullName: string = "Rocket's Minefield Gym G2 119";
  public text: string = "This card stays in play after being played. Discard this card if another Stadium card comes into play. Whenever a player puts a Basic Pokémon onto his or her Bench from his or her hand, he or she flips a coin. If tails, put damage counters on that Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
