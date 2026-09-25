import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class SuperScoopUp_151 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "EX";
  public name: string = "Super Scoop Up";
  public fullName: string = "Super Scoop Up EX 151";
  public text: string = "Flip a coin. If heads, return 1 of your Pokémon and all cards attached to it to your hand.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "superScoopUp");
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "superScoopUp");
    }
    return state;
  }
}
