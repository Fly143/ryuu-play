import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class StevenSResolve_165 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "CES";
  public name: string = "Steven's Resolve";
  public fullName: string = "Steven's Resolve CES 165";
  public text: string = "Search your deck for up to 3 cards and put them into your hand. Then, shuffle your deck. Your turn ends.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
