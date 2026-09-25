import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Xtransceiver_96 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "NVI";
  public name: string = "Xtransceiver";
  public fullName: string = "Xtransceiver NVI 96";
  public text: string = "Flip a coin. If heads, search your deck for a Supporter card, reveal it, and put it into your hand. Shuffle your deck afterward. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.searchToHand(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
