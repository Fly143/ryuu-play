import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class DevolutionSpray_113 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "BCR";
  public name: string = "Devolution Spray";
  public fullName: string = "Devolution Spray BCR 113";
  public text: string = "Devolve 1 of your evolved Pokémon and put the highest stage Evolution card on it into your hand. (That Pokémon can't evolve this turn.) You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "devolve");
    }
    return state;
  }
}
