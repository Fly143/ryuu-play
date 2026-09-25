import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Revive_85 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "EVO";
  public name: string = "Revive";
  public fullName: string = "Revive EVO 85";
  public text: string = "Put a Basic Pokémon from your discard pile onto your Bench. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* recoverPokemonFromDiscard:1 */ state;
    }
    return state;
  }
}
