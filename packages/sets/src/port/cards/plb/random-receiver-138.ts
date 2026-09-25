import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class RandomReceiver_138 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "PLB";
  public name: string = "Random Receiver";
  public fullName: string = "Random Receiver PLB 138";
  public text: string = "Reveal cards from the top of your deck until you reveal a Supporter card. Put it into your hand. Shuffle the other cards back into your deck. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.searchToHand(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
