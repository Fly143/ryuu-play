import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class BillSMaintenance_162 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "CES";
  public name: string = "Bill's Maintenance";
  public fullName: string = "Bill's Maintenance CES 162";
  public text: string = "Shuffle a card from your hand into your deck. If you do, draw 3 cards.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.drawCards(this, store, state, effect).playCard(effect as TrainerEffect, 3);
      return commonEffects.drawCards(this, store, state, effect).playCard(effect as TrainerEffect, 3);
    }
    return state;
  }
}
