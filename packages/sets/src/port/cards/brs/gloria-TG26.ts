import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class GloriaTG26 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "BRS";
  public name: string = "Gloria";
  public fullName: string = "Gloria BRS TG26";
  public text: string = "Search your deck for up to 3 Basic Pokémon that don't have a Rule Box and put them onto your Bench. Then, shuffle your deck. (Pokémon V, Pokémon-GX, etc. have Rule Boxes.)";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "searchBasicToBench:3");
    }
    return state;
  }
}
