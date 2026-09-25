import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class IngoEmmet_176 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "UNB";
  public name: string = "Ingo & Emmet";
  public fullName: string = "Ingo & Emmet UNB 176";
  public text: string = "Look at the top card of your deck, and then choose 1: • Discard your hand and draw 5 cards. • Discard your hand and draw 5 cards from the bottom of your deck.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.discardHandDraw(this, store, state, effect).playCard(effect as TrainerEffect, 5);
      return commonEffects.discardHandDraw(this, store, state, effect).playCard(effect as TrainerEffect, 5);
    }
    return state;
  }
}
