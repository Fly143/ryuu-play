import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PokMonRetriever_84 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "TRR";
  public name: string = "Pokémon Retriever";
  public fullName: string = "Pokémon Retriever TRR 84";
  public text: string = "Search your discard pile for Basic Pokémon and Evolution cards. You may either show 1 Basic Pokémon or Evolution card to your opponent and put it into your hand, or show a combination of 3 Basic Pokémon or Evolution cards to your opponent and shuffle them into your deck.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.recoverFromDiscard(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
