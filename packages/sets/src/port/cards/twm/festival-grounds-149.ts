import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class FestivalGrounds_149 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "TWM";
  public name: string = "Festival Grounds";
  public fullName: string = "Festival Grounds TWM 149";
  public text: string = "Each Pokémon that has any Energy attached (both yours and your opponent's) recovers from all Special Conditions and can't be affected by any Special Conditions.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
