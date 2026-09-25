import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PokMonCenter_114 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "JU";
  public name: string = "Pokémon Center";
  public fullName: string = "Pokémon Center JU 114";
  public text: string = "Remove all damage counters from all of your own Pokémon with damage counters on them, then discard all Energy cards attached to those Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "pokemonCenter");
    }
    return state;
  }
}
