import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class FamiliarBell_161 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "DAA";
  public name: string = "Familiar Bell";
  public fullName: string = "Familiar Bell DAA 161";
  public text: string = "Search your deck for a Pokémon with the same name as a Pokémon in your discard pile, reveal it, and put it into your hand. Then, shuffle your deck. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.searchToHand(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
