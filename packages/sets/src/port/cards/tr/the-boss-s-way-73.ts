import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TheBossSWay_73 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "TR";
  public name: string = "The Boss's Way";
  public fullName: string = "The Boss's Way TR 73";
  public text: string = "Search your deck for an Evolution card with Dark in its name. Show it to your opponent and put it into your hand. Shuffle your deck afterward.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.searchToHand(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
