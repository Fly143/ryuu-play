import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MaxRevive_120 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "XY";
  public name: string = "Max Revive";
  public fullName: string = "Max Revive XY 120";
  public text: string = "Put a Pokémon from your discard pile on top of your deck. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
