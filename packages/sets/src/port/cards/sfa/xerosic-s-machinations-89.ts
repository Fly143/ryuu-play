import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class XerosicSMachinations_89 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "SFA";
  public name: string = "Xerosic's Machinations";
  public fullName: string = "Xerosic's Machinations SFA 89";
  public text: string = "Your opponent discards cards from their hand until they have 3 cards in their hand.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.discardOpponentHandTrainer(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
