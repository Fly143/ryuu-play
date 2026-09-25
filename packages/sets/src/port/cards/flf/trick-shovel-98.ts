import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TrickShovel_98 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "FLF";
  public name: string = "Trick Shovel";
  public fullName: string = "Trick Shovel FLF 98";
  public text: string = "Look at the top card of either player's deck. You may discard that card or return it to the top of the deck. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
