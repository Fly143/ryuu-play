import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PaldeanStudent_86 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "PAF";
  public name: string = "Paldean Student";
  public fullName: string = "Paldean Student PAF 86";
  public text: string = "Search your deck for a Pokémon that doesn't have a Rule Box, reveal it, and put it into your hand. For each Paldean Student card (not including this card) in your discard pile, you may search for an additional Pokémon in this way. Then, shuffle your deck. (Pokémon ex, Pokémon V, etc. have Rule Boxes.)";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.searchToHand(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
