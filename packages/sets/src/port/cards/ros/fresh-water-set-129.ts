import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class FreshWaterSet_129 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "ROS";
  public name: string = "Fresh Water Set";
  public fullName: string = "Fresh Water Set ROS 129";
  public text: string = "Heal 20 damage from each of your Pokémon. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.healEachPokemon(this, store, state, effect).playCard(effect as TrainerEffect, 20);
    }
    return state;
  }
}
