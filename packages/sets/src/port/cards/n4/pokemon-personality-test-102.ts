import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PokMonPersonalityTest_102 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "N4";
  public name: string = "Pokémon Personality Test";
  public fullName: string = "Pokémon Personality Test N4 102";
  public text: string = "Put an Evolution card from your hand face down in front of you. Your opponent guesses whether it is a Pokémon card with Light in its name, a Pokémon card with Dark in its name, or neither one. Flip the card over. If your opponent guessed right, he or she draws 3 cards. If your opponent guessed wrong, you draw 3 cards. Either way, return the card to your hand.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
