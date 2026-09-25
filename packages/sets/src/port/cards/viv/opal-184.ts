import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Opal_184 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "VIV";
  public name: string = "Opal";
  public fullName: string = "Opal VIV 184";
  public text: string = "Flip 2 coins. Search your deck for a number of cards up to the number of heads, put them into your hand, and shuffle your deck.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.searchToHand(this, store, state, effect).playCard(effect as TrainerEffect, 2);
    }
    return state;
  }
}
