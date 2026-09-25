import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Kamado_205 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "BRS";
  public name: string = "Kamado";
  public fullName: string = "Kamado BRS 205";
  public text: string = "Choose a card in your hand, and discard the other cards. If you do, draw 4 cards. (If you have no other cards in your hand, you can't use this card.)";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.discardHandDraw(this, store, state, effect).playCard(effect as TrainerEffect, 4);
    }
    return state;
  }
}
