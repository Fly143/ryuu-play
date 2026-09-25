import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class FloralCrownRC26 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "GEN";
  public name: string = "Floral Crown";
  public fullName: string = "Floral Crown GEN RC26";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. At the end of your opponent's turn, heal 20 damage from the Basic Pokémon this card is attached to. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.healDamage(this, store, state, effect).playCard(effect as TrainerEffect, 20);
    }
    return state;
  }
}
