import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class CallBell_165 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "SSP";
  public name: string = "Call Bell";
  public fullName: string = "Call Bell SSP 165";
  public text: string = "You can use this card only if you go second, and only during your first turn. Search your deck for a Supporter card, reveal it, and put it into your hand. Then, shuffle your deck. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.searchToHand(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
