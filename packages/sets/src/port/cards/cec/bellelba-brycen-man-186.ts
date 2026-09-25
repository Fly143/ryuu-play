import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class BellelbaBrycenMan_186 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "CEC";
  public name: string = "Bellelba & Brycen-Man";
  public fullName: string = "Bellelba & Brycen-Man CEC 186";
  public text: string = "Discard 3 cards from the top of each player's deck. When you play this card, you may discard 3 other cards from your hand. If you do, each player discards their Benched Pokémon until they have 3 Benched Pokémon. Your opponent discards first.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
