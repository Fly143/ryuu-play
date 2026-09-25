import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Brigette_134 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "BKP";
  public name: string = "Brigette";
  public fullName: string = "Brigette BKP 134";
  public text: string = "Search your deck for 1 Basic Pokémon-EX or 3 Basic Pokémon (except for Pokémon-EX) and put them onto your Bench. Shuffle your deck afterward.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
