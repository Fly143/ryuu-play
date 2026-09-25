import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class BlaineSLastResort_105 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "G1";
  public name: string = "Blaine's Last Resort";
  public fullName: string = "Blaine's Last Resort G1 105";
  public text: string = "You can't play this card if you have any cards in your hand other than Blaine's Last Resort. Show your hand to your opponent, then draw 5 cards.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* structural */ state;
      return commonEffects.drawCards(this, store, state, effect).playCard(effect as TrainerEffect, 5);
    }
    return state;
  }
}
