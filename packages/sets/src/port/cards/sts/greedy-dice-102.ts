import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class GreedyDice_102 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "STS";
  public name: string = "Greedy Dice";
  public fullName: string = "Greedy Dice STS 102";
  public text: string = "You can play this card only if you took it as a face-down Prize card, before you put it into your hand. Flip a coin. If heads, take 1 more Prize card. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
