import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class HandTrimmer_150 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "TEF";
  public name: string = "Hand Trimmer";
  public fullName: string = "Hand Trimmer TEF 150";
  public text: string = "Each player discards cards from their hand until they have 5 cards in their hand. Your opponent discards first. (If a player has 5 or fewer cards in their hand, they do not discard.) You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
