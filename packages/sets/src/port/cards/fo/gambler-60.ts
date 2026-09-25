import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Gambler_60 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "FO";
  public name: string = "Gambler";
  public fullName: string = "Gambler FO 60";
  public text: string = "Shuffle your hand into your deck. Flip a coin. If heads, draw 8 cards. If tails, draw 1 card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "flipHeadsDrawOrOne");
    }
    return state;
  }
}
