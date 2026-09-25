import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class HyperPotion_54 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "CPA";
  public name: string = "Hyper Potion";
  public fullName: string = "Hyper Potion CPA 54";
  public text: string = "Heal 120 damage from 1 of your Pokémon that has at least 2 Energy attached. If you healed any damage in this way, discard 2 Energy from it. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.healDamage(this, store, state, effect).playCard(effect as TrainerEffect, 120);
    }
    return state;
  }
}
