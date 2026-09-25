import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class GuzmaHala_193 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "CEC";
  public name: string = "Guzma & Hala";
  public fullName: string = "Guzma & Hala CEC 193";
  public text: string = "Search your deck for a Stadium card, reveal it, and put it into your hand. Then, shuffle your deck. When you play this card, you may discard 2 other cards from your hand. If you do, you may also search for a Pokémon Tool card and a Special Energy card in this way.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
