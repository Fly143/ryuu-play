import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class DuskBall_110 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "MT";
  public name: string = "Dusk Ball";
  public fullName: string = "Dusk Ball MT 110";
  public text: string = "Look at the 7 cards from the bottom of your deck. Choose 1 Pokémon you find there, show it to your opponent, and put it into your hand. Put the remaining cards back on top of your deck. Shuffle your deck afterward.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.searchToHand(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
