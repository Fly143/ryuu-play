import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class OldAmberAerodactyl_97 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "DRX";
  public name: string = "Old Amber Aerodactyl";
  public fullName: string = "Old Amber Aerodactyl DRX 97";
  public text: string = "Look at the bottom 7 cards of your deck. You may reveal an Aerodactyl you find there and put it onto your Bench. Shuffle the other cards back into your deck. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
