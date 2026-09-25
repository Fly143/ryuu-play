import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ArvenSSandwich_161 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "DRI";
  public name: string = "Arven's Sandwich";
  public fullName: string = "Arven's Sandwich DRI 161";
  public text: string = "Heal 30 damage from your Active Pokémon. If that Pokémon is an Arven's Pokémon, heal 100 damage from it instead. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.healDamage(this, store, state, effect).playCard(effect as TrainerEffect, 30);
    }
    return state;
  }
}
