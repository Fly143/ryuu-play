import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class WallyRC27 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "GEN";
  public name: string = "Wally";
  public fullName: string = "Wally GEN RC27";
  public text: string = "Search your deck for a card that evolves from 1 of your Pokémon (excluding Pokémon-EX) and put it onto that Pokémon. (This counts as evolving that Pokémon.) Shuffle your deck afterward. You can use this card during your first turn or on a Pokémon that was put into play this turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.searchToHand(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
