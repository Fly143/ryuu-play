import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class LureBall_128 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "SK";
  public name: string = "Lure Ball";
  public fullName: string = "Lure Ball SK 128";
  public text: string = "Flip 3 coins. For each heads, choose an Evolution card from your discard pile, show it to your opponent, and put it into your hand.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.recoverFromDiscard(this, store, state, effect).playCard(effect as TrainerEffect, 3);
    }
    return state;
  }
}
