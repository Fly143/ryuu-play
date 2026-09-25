import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TrainersMail_92a extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "AOR";
  public name: string = "Trainers' Mail";
  public fullName: string = "Trainers' Mail AOR 92a";
  public text: string = "Look at the top 4 cards of your deck. You may reveal a Trainer card you find there (except Trainers' Mail) and put it into your hand. Shuffle the other cards back into your deck. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.drawUntilHand(this, store, state, effect).playCard(effect as TrainerEffect, 0);
    }
    return state;
  }
}
