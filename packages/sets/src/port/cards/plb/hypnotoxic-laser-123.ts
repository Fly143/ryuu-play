import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class HypnotoxicLaser_123 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "PLB";
  public name: string = "Hypnotoxic Laser";
  public fullName: string = "Hypnotoxic Laser PLB 123";
  public text: string = "Your opponent's Active Pokémon is now Poisoned. Flip a coin. If heads, your opponent's Active Pokémon is also Asleep. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
