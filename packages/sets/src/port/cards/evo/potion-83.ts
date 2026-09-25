import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Potion_832 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "EVO";
  public name: string = "Potion";
  public fullName: string = "Potion EVO 83";
  public text: string = "Heal 30 damage from 1 of your Pokémon. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.healDamage(this, store, state, effect).playCard(effect as TrainerEffect, 2 * 10);
      return commonEffects.healDamage(this, store, state, effect).playCard(effect as TrainerEffect, 2 * 10);
    }
    return state;
  }
}
