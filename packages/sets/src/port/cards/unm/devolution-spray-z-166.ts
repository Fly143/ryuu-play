import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class DevolutionSprayZ_166 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "UNM";
  public name: string = "Devolution Spray Z";
  public fullName: string = "Devolution Spray Z UNM 166";
  public text: string = "Devolve 1 of your evolved Pokémon by shuffling any number of Evolution cards on it into your deck. (That Pokémon can't evolve this turn.) You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "devolve");
    }
    return state;
  }
}
