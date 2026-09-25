import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Potion_83 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "POR";
  public name: string = "Potion";
  public fullName: string = "Potion POR 83";
  public text: string = "Heal 30 damage from 1 of your Pokémon. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.healDamage(this, store, state, effect).playCard(effect as TrainerEffect, 2 * 10);
    }
    return state;
  }
}
