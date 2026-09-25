import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class CedricJuniper_110 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "PHF";
  public name: string = "Cedric Juniper";
  public fullName: string = "Cedric Juniper PHF 110";
  public text: string = "Put a Pokémon from your hand face down in front of you and tell your opponent its name. Your opponent guesses the height of that Pokémon. Reveal that Pokémon. If your opponent guessed right, he or she draws 3 cards. If your opponent guessed wrong, you draw 3 cards. Return the Pokémon to your hand. (You can't choose a Pokémon that doesn't have the height printed on the card.)";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
