import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PuzzleOfTime_109 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "GEN";
  public name: string = "Puzzle of Time";
  public fullName: string = "Puzzle of Time GEN 109";
  public text: string = "You may play 2 Puzzle of Time cards at once. • If you played 1 card, look at the top 3 cards of your deck and put them back in any order. • If you played 2 cards, put 2 cards from your discard pile into your hand. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
