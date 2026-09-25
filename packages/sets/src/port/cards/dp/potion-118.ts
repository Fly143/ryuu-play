import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Potion_118 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "DP";
  public name: string = "Potion";
  public fullName: string = "Potion DP 118";
  public text: string = "Remove 2 damage counters from 1 of your Pokémon (remove 1 damage counter if that Pokémon has only 1).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.healDamage(this, store, state, effect).playCard(effect as TrainerEffect, 2 * 10);
    }
    return state;
  }
}
