import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class BlaineSQuiz2_111 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "G2";
  public name: string = "Blaine's Quiz #2";
  public fullName: string = "Blaine's Quiz #2 G2 111";
  public text: string = "Put a card from your hand face down in front of you. Your opponent guesses whether it is an Energy card, a Trainer card, or a Pokémon (Basic or Evolution) card. Flip the card over. If your opponent guessed right, he or she draws 2 cards. If your opponent guessed wrong, you draw 2 cards. Either way, return the card to your hand.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
