import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class GapejawBog_213 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "PGO";
  public name: string = "Gapejaw Bog";
  public fullName: string = "Gapejaw Bog PGO 213";
  public text: string = "Whenever either player puts a Basic Pokémon from their hand onto their Bench, put 2 damage counters on that Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
