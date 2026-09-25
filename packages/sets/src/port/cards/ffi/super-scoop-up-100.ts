import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class SuperScoopUp_1002 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "FFI";
  public name: string = "Super Scoop Up";
  public fullName: string = "Super Scoop Up FFI 100";
  public text: string = "Flip a coin. If heads, put 1 of your Pokémon and all cards attached to it into your hand. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "superScoopUp");
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "superScoopUp");
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "superScoopUp");
    }
    return state;
  }
}
