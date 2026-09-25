import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class RepeatBall_136 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "ROS";
  public name: string = "Repeat Ball";
  public fullName: string = "Repeat Ball ROS 136";
  public text: string = "Search your deck for a Pokémon with the same name as 1 of your Pokémon in play, reveal it, and put it into your hand. Shuffle your deck afterward. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.searchToHand(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
