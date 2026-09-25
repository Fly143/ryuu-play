import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MaxRod_116 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "PRE";
  public name: string = "Max Rod";
  public fullName: string = "Max Rod PRE 116";
  public text: string = "Put up to 5 in any combination of Pokémon and Basic Energy cards from your discard pile into your hand. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.recoverFromDiscard(this, store, state, effect).playCard(effect as TrainerEffect, 5);
    }
    return state;
  }
}
