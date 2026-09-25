import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class VSSeeker_100 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "RG";
  public name: string = "VS Seeker";
  public fullName: string = "VS Seeker RG 100";
  public text: string = "Search your discard pile for a Supporter card, show it to your opponent, and put it into your hand.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.searchToHand(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
