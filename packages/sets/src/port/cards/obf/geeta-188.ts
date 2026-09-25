import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Geeta_188 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "OBF";
  public name: string = "Geeta";
  public fullName: string = "Geeta OBF 188";
  public text: string = "Search your deck for up to 2 Basic Energy cards and attach them to 1 of your Pokémon. Then, shuffle your deck. During this turn, your Pokémon can't attack. (This includes Pokémon that come into play this turn.)";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "searchBasicToBench:2");
    }
    return state;
  }
}
