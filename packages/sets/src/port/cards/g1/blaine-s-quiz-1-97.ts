import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class BlaineSQuiz1_97 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "G1";
  public name: string = "Blaine's Quiz #1";
  public fullName: string = "Blaine's Quiz #1 G1 97";
  public text: string = "Put a Basic Pokémon or Evolution card from your hand face down in front of you and tell your opponent its name. Your opponent guesses the length of that Pokémon. Flip the card over. If your opponent guessed right, he or she draws 2 cards. If your opponent guessed wrong, you draw 2 cards. Either way, return the card to your hand.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
