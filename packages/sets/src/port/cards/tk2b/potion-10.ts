import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Potion_10 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "TK2B";
  public name: string = "Potion";
  public fullName: string = "Potion TK2B 10";
  public text: string = "Remove 2 damage counters from 1 of your Pokémon (remove 1 damage counter if that Pokémon has only 1).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.healDamage(this, store, state, effect).playCard(effect as TrainerEffect, 2 * 10);
    }
    return state;
  }
}
