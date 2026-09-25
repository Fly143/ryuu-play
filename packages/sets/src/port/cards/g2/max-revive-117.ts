import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MaxRevive_117 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "G2";
  public name: string = "Max Revive";
  public fullName: string = "Max Revive G2 117";
  public text: string = "Discard 2 Energy cards from your hand in order to put 1 Basic Pokémon from your discard pile onto your Bench. (You can't play Max Revive if your Bench is full.)";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
