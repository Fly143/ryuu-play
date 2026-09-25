import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PokDex_82 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "EVO";
  public name: string = "Pokédex";
  public fullName: string = "Pokédex EVO 82";
  public text: string = "Look at the top 5 cards of your deck and put them back in any order. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "pokedex");
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "pokedex");
    }
    return state;
  }
}
