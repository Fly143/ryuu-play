import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class BeachCourt_263 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "PAR";
  public name: string = "Beach Court";
  public fullName: string = "Beach Court PAR 263";
  public text: string = "The Retreat Cost of each Basic Pokémon in play (both yours and your opponent's) is Colorless less.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
