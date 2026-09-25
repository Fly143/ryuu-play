import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class HyperAroma_152 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "TWM";
  public name: string = "Hyper Aroma";
  public fullName: string = "Hyper Aroma TWM 152";
  public text: string = "Search your deck for up to 3 Stage 1 Pokémon, reveal them, and put them into your hand. Then, shuffle your deck. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.searchToHand(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
