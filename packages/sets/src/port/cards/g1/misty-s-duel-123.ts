import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MistySDuel_123 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "G1";
  public name: string = "Misty's Duel";
  public fullName: string = "Misty's Duel G1 123";
  public text: string = "You and your opponent play a game of Rock-Paper-Scissors. The winner shuffles his or her hand into his or her deck and draws a new hand of 5 cards. (If you don't know how to play Rock-Paper-Scissors, flip a coin to decide who's the winner.)";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
