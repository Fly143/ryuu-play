import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class LifeHerb_108 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "PL";
  public name: string = "Life Herb";
  public fullName: string = "Life Herb PL 108";
  public text: string = "Flip a coin. If heads, choose 1 of your Pokémon, and remove all Special Conditions and 6 damage counters from that Pokémon (all if there are less than 6).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "clearSpecialConditions");
    }
    return state;
  }
}
