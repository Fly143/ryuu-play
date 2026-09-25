import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MistyLorelei_199 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "CEC";
  public name: string = "Misty & Lorelei";
  public fullName: string = "Misty & Lorelei CEC 199";
  public text: string = "Search your deck for up to 3 Water Energy cards, reveal them, and put them into your hand. Then, shuffle your deck. When you play this card, you may discard 5 other cards from your hand. If you do, during this turn, your Water Pokémon can use their GX attacks even if you have used your GX attack.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
