import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class StadiumNav_208 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "CEC";
  public name: string = "Stadium Nav";
  public fullName: string = "Stadium Nav CEC 208";
  public text: string = "Flip 2 coins. For each heads, search your deck for a Stadium card, reveal it, and put it into your hand. Then, shuffle your deck. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
