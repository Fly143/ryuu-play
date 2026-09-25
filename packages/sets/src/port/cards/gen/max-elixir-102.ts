import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MaxElixir_102 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "GEN";
  public name: string = "Max Elixir";
  public fullName: string = "Max Elixir GEN 102";
  public text: string = "Look at the top 6 cards of your deck and attach a basic Energy card you find there to a Basic Pokémon on your Bench. Shuffle the other cards back into your deck. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
