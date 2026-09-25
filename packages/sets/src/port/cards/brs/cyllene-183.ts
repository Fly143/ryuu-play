import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Cyllene_183 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "BRS";
  public name: string = "Cyllene";
  public fullName: string = "Cyllene BRS 183";
  public text: string = "Flip 2 coins. Put a number of cards up to the number of heads from your discard pile on top of your deck in any order.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.recoverFromDiscard(this, store, state, effect).playCard(effect as TrainerEffect, 2);
    }
    return state;
  }
}
