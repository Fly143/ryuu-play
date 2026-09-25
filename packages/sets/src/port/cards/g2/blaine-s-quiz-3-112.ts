import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class BlaineSQuiz3_112 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "G2";
  public name: string = "Blaine's Quiz #3";
  public fullName: string = "Blaine's Quiz #3 G2 112";
  public text: string = "Put a Basic or Evolution card from your hand face down in front of you and tell your opponent the name of an attack of that card. Your opponent guesses the name of that card. Flip the card over. If your opponent guessed right, he or she draws 3 cards. If your opponent guessed wrong, you draw 3 cards. Either way, return the card to your hand.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
