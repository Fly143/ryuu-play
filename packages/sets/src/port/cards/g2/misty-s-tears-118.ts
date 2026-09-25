import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MistySTears_118 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "G2";
  public name: string = "Misty's Tears";
  public fullName: string = "Misty's Tears G2 118";
  public text: string = "Discard 1 of the other cards in your hand in order to search your deck for up to 2 Water Energy cards. Show those cards to your opponent, then put them into your hand. Shuffle your deck afterward.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.discardFromHandTrainer(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
