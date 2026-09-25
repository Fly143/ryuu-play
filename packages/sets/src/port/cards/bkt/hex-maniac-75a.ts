import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class HexManiac_75a extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "BKT";
  public name: string = "Hex Maniac";
  public fullName: string = "Hex Maniac BKT 75a";
  public text: string = "Until the end of your opponent's next turn, each Pokémon in play, in each player's hand, and in each player's discard pile has no Abilities. (This includes cards that come into play on that turn.)";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
