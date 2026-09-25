import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Caitlin_78 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "FFI";
  public name: string = "Caitlin";
  public fullName: string = "Caitlin FFI 78";
  public text: string = "Put as many cards from your hand as you like on the bottom of your deck in any order. Then, draw a card for each card you put on the bottom of your deck.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.drawUntilHand(this, store, state, effect).playCard(effect as TrainerEffect, 6);
    }
    return state;
  }
}
