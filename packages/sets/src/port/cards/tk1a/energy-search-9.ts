import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class EnergySearch_9 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "TK1A";
  public name: string = "Energy Search";
  public fullName: string = "Energy Search TK1A 9";
  public text: string = "Search your deck for a basic Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.searchEnergyToHand(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
