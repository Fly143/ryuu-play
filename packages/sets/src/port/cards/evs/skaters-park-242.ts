import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class SkatersPark_242 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "EVS";
  public name: string = "Skaters' Park";
  public fullName: string = "Skaters' Park EVS 242";
  public text: string = "Whenever either player's Active Pokémon retreats, put any basic Energy that would be discarded into their hand instead of the discard pile.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
