import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class DualBall_89 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "DS";
  public name: string = "Dual Ball";
  public fullName: string = "Dual Ball DS 89";
  public text: string = "Flip 2 coins. For each heads, search your deck for a Basic Pokémon card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.searchToHand(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
