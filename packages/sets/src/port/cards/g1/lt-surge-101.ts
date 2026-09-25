import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class LtSurge_101 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "G1";
  public name: string = "Lt. Surge";
  public fullName: string = "Lt. Surge G1 101";
  public text: string = "You can play this card only if you have at least 1 Basic Pokémon card in your hand. Put a Basic Pokémon card from your hand into play as your Active Pokémon. Put your old Active Pokémon onto your Bench. (You can't play this card if your Bench is full.)";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
