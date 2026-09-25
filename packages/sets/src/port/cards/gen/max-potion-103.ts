import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MaxPotion_103 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "GEN";
  public name: string = "Max Potion";
  public fullName: string = "Max Potion GEN 103";
  public text: string = "Heal all damage from 1 of your Pokémon. If you do, discard all Energy attached to that Pokémon. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.healDamage(this, store, state, effect).playCard(effect as TrainerEffect, 999);
    }
    return state;
  }
}
