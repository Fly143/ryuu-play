import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ChipChipIceAxe_165 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "UNM";
  public name: string = "Chip-Chip Ice Axe";
  public fullName: string = "Chip-Chip Ice Axe UNM 165";
  public text: string = "Look at the top 3 cards of your opponent's deck and choose 1 of them. Your opponent shuffles the other cards back into their deck. Then, put the card you chose on top of their deck. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
