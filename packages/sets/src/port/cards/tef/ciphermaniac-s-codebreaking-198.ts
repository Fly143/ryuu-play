import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class CiphermaniacSCodebreaking_198 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "TEF";
  public name: string = "Ciphermaniac's Codebreaking";
  public fullName: string = "Ciphermaniac's Codebreaking TEF 198";
  public text: string = "Search your deck for 2 cards, shuffle your deck, then put those cards on top of it in any order.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
