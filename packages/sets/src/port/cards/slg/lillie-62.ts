import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Lillie_62 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "SLG";
  public name: string = "Lillie";
  public fullName: string = "Lillie SLG 62";
  public text: string = "Draw cards until you have 6 cards in your hand. If it's your first turn, draw cards until you have 8 cards in your hand.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.drawUntilHand(this, store, state, effect).playCard(effect as TrainerEffect, 6);
      return commonEffects.drawUntilHand(this, store, state, effect).playCard(effect as TrainerEffect, 8);
    }
    return state;
  }
}
