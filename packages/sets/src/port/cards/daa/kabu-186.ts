import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Kabu_186 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "DAA";
  public name: string = "Kabu";
  public fullName: string = "Kabu DAA 186";
  public text: string = "Shuffle your hand into your deck. Then, draw 4 cards. If your Active Pokémon is your only Pokémon in play, draw 8 cards instead.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
