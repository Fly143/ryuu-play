import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MistySDetermination_62 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "HIF";
  public name: string = "Misty's Determination";
  public fullName: string = "Misty's Determination HIF 62";
  public text: string = "Discard a card from your hand. If you do, look at the top 8 cards of your deck and put 1 of them into your hand. Shuffle the other cards back into your deck.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.discardFromHandTrainer(this, store, state, effect).playCard(effect as TrainerEffect, 1);
      return commonEffects.drawCards(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
