import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class GoldPotion_140 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "PLS";
  public name: string = "Gold Potion";
  public fullName: string = "Gold Potion PLS 140";
  public text: string = "Heal 90 damage from your Active Pokémon. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.healDamage(this, store, state, effect).playCard(effect as TrainerEffect, 90);
    }
    return state;
  }
}
