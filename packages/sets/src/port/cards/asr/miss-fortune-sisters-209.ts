import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MissFortuneSisters_209 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "ASR";
  public name: string = "Miss Fortune Sisters";
  public fullName: string = "Miss Fortune Sisters ASR 209";
  public text: string = "Look at the top 5 cards of your opponent's deck and discard any number of Item cards you find there. Your opponent shuffles the other cards back into their deck.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "millOpponent:2");
    }
    return state;
  }
}
