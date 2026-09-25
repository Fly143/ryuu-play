import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TreasureTracker_131 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "PRE";
  public name: string = "Treasure Tracker";
  public fullName: string = "Treasure Tracker PRE 131";
  public text: string = "Search your deck for up to 5 Pokémon Tool cards, reveal them, and put them into your hand. Then, shuffle your deck. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.searchToHand(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
