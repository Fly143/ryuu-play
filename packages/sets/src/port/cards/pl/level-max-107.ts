import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class LevelMax_107 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "PL";
  public name: string = "Level Max";
  public fullName: string = "Level Max PL 107";
  public text: string = "Flip a coin. If heads, search your deck for a Pokémon LV.X that levels up from 1 of your Pokémon, and put it onto that Pokémon. (This counts as leveling up that Pokémon.) Shuffle your deck afterward.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
