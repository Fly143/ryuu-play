import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Erika_100 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "G1";
  public name: string = "Erika";
  public fullName: string = "Erika G1 100";
  public text: string = "You may draw up to 3 cards, then your opponent may draw up to 3 cards.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.bothDraw(this, store, state, effect).playCard(effect as TrainerEffect, 5);
    }
    return state;
  }
}
