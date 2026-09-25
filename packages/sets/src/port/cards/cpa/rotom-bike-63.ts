import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class RotomBike_63 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "CPA";
  public name: string = "Rotom Bike";
  public fullName: string = "Rotom Bike CPA 63";
  public text: string = "Draw cards until you have 6 cards in your hand. Your turn ends. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.drawUntilHand(this, store, state, effect).playCard(effect as TrainerEffect, 6);
    }
    return state;
  }
}
