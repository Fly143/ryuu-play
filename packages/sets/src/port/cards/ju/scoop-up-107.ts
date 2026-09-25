import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ScoopUp_107 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "JU";
  public name: string = "Scoop Up";
  public fullName: string = "Scoop Up JU 107";
  public text: string = "Choose 1 of your Pokémon in play and return its Basic Pokémon card to your hand. (Discard all cards attached to that card.)";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "scoopUpSelf");
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "scoopUpSelf");
    }
    return state;
  }
}
