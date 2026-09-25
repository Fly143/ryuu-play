import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class LillieSFullForce_230 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "CEC";
  public name: string = "Lillie's Full Force";
  public fullName: string = "Lillie's Full Force CEC 230";
  public text: string = "Draw 4 cards. At the end of this turn, if you have 3 or more cards in your hand, shuffle cards from your hand into your deck until you have 2 cards in your hand.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.drawCards(this, store, state, effect).playCard(effect as TrainerEffect, 4);
    }
    return state;
  }
}
