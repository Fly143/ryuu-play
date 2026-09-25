import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class RuinWall_74 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "N2";
  public name: string = "Ruin Wall";
  public fullName: string = "Ruin Wall N2 74";
  public text: string = "Search your deck for a card with Unown in its name and put it onto your Bench. Shuffle your deck afterward. (You can't play this card if your Bench is full.)";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
