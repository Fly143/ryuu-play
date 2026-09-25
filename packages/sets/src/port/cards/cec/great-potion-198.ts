import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class GreatPotion_198 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "CEC";
  public name: string = "Great Potion";
  public fullName: string = "Great Potion CEC 198";
  public text: string = "Heal 50 damage from your Active Pokémon-GX. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
