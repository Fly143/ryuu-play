import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class HeavyBall_88 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "DEX";
  public name: string = "Heavy Ball";
  public fullName: string = "Heavy Ball DEX 88";
  public text: string = "Search your deck for a Pokémon with a Retreat Cost of 3 or more, reveal it, and put it into your hand. Shuffle your deck afterward. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.searchToHand(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
