import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Sonia_65 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "CPA";
  public name: string = "Sonia";
  public fullName: string = "Sonia CPA 65";
  public text: string = "Search your deck for up to 2 Basic Pokémon or up to 2 basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "searchBasicToBench:2");
    }
    return state;
  }
}
