import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MissFortuneSisters_194 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "ASR";
  public name: string = "Miss Fortune Sisters";
  public fullName: string = "Miss Fortune Sisters ASR 194";
  public text: string = "Look at the top 5 cards of your opponent's deck and discard any number of Item cards you find there. Your opponent shuffles the other cards back into their deck.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
