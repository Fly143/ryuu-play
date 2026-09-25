import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class SuperPotion_158 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "JTG";
  public name: string = "Super Potion";
  public fullName: string = "Super Potion JTG 158";
  public text: string = "Heal 60 damage from 1 of your Pokémon. If you healed any damage in this way, discard an Energy from that Pokémon. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.healDamage(this, store, state, effect).playCard(effect as TrainerEffect, 4 * 10);
      return commonEffects.healDamage(this, store, state, effect).playCard(effect as TrainerEffect, 4 * 10);
    }
    return state;
  }
}
