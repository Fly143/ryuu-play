import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Sabrina_20 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "G2";
  public name: string = "Sabrina";
  public fullName: string = "Sabrina G2 20";
  public text: string = "Take all Energy cards attached to 1 of your Pokémon with Sabrina in its name and attach them to another 1 of your Pokémon with Sabrina in its name.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "energyTrans");
    }
    return state;
  }
}
