import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PremierBall_101 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "GE";
  public name: string = "Premier Ball";
  public fullName: string = "Premier Ball GE 101";
  public text: string = "Search your deck or your discard pile for a Pokémon LV.X, show it to your opponent, and put it into your hand. If you search your deck, shuffle your deck afterward.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
