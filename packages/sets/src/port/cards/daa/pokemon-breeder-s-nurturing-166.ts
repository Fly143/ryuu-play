import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PokMonBreederSNurturing_166 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "DAA";
  public name: string = "Pokémon Breeder's Nurturing";
  public fullName: string = "Pokémon Breeder's Nurturing DAA 166";
  public text: string = "Choose up to 2 of your Pokémon in play. For each of those Pokémon, search your deck for a card that evolves from that Pokémon and put it onto that Pokémon to evolve it. Then, shuffle your deck. You can't use this card during your first turn or on a Pokémon that was put into play this turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.searchToHand(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
