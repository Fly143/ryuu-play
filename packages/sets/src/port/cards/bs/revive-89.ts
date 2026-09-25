import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Revive_89 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "BS";
  public name: string = "Revive";
  public fullName: string = "Revive BS 89";
  public text: string = "Put 1 Basic Pokémon card from your discard pile onto your Bench. Put damage counters on that Pokémon equal to half its HP (rounded down to the nearest 10). (You can't play Revive if your Bench is full.)";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "recoverPokemonFromDiscard:1");
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "recoverPokemonFromDiscard:1");
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "recoverPokemonFromDiscard:1");
    }
    return state;
  }
}
