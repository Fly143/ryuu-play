import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class RedBlue_202 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "CEC";
  public name: string = "Red & Blue";
  public fullName: string = "Red & Blue CEC 202";
  public text: string = "Search your deck for a Pokémon-GX that evolves from 1 of your Pokémon and put it onto that Pokémon to evolve it. Then, shuffle your deck. (You can't use this card during your first turn or on a Pokémon that was put into play this turn.) When you play this card, you may discard 2 other cards from your hand. If you do, search your deck for up to 2 basic Energy cards and attach them to the Pokémon you evolved in this way.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "searchBasicToBench:2");
    }
    return state;
  }
}
