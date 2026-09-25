import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Revive_102 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "BW";
  public name: string = "Revive";
  public fullName: string = "Revive BW 102";
  public text: string = "Put a Basic Pokémon from your discard pile onto your Bench. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "recoverPokemonFromDiscard:1");
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "recoverPokemonFromDiscard:1");
    }
    return state;
  }
}
