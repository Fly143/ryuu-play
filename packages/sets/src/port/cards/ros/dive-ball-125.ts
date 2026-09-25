import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class DiveBall_125 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "ROS";
  public name: string = "Dive Ball";
  public fullName: string = "Dive Ball ROS 125";
  public text: string = "Search your deck for a Water Pokémon, reveal it, and put it into your hand. Shuffle your deck afterward. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.searchToHand(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
