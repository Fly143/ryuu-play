import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class LureBall_138 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "CES";
  public name: string = "Lure Ball";
  public fullName: string = "Lure Ball CES 138";
  public text: string = "Flip 3 coins. For each heads, put an Evolution Pokémon from your discard pile into your hand. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
