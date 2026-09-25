import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class NighttimeMine_197 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "ASC";
  public name: string = "Nighttime Mine";
  public fullName: string = "Nighttime Mine ASC 197";
  public text: string = "Attacks used by each Tera Pokémon in play (both yours and your opponent's) cost Colorless more.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
