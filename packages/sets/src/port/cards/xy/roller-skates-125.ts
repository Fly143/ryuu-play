import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class RollerSkates_125 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "XY";
  public name: string = "Roller Skates";
  public fullName: string = "Roller Skates XY 125";
  public text: string = "Flip a coin. If heads, draw 3 cards. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
