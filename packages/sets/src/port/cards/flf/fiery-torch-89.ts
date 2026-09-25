import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class FieryTorch_89 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "FLF";
  public name: string = "Fiery Torch";
  public fullName: string = "Fiery Torch FLF 89";
  public text: string = "Discard a Fire Energy card from your hand. (If you can't discard a Fire Energy card, you can't play this card.) Draw 2 cards. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
