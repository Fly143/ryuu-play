import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class RollerSkates_103 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "PHF";
  public name: string = "Roller Skates";
  public fullName: string = "Roller Skates PHF 103";
  public text: string = "Flip a coin. If heads, draw 3 cards. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
