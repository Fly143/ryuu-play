import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class FairyDrop_99 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "FAC";
  public name: string = "Fairy Drop";
  public fullName: string = "Fairy Drop FAC 99";
  public text: string = "Heal 50 damage from 1 of your Pokémon that has any Fairy Energy attached to it. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.healDamage(this, store, state, effect).playCard(effect as TrainerEffect, 50);
    }
    return state;
  }
}
