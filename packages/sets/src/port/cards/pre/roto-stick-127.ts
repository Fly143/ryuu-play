import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class RotoStick_127 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "PRE";
  public name: string = "Roto-Stick";
  public fullName: string = "Roto-Stick PRE 127";
  public text: string = "Look at the top 4 cards of your deck. You may reveal any number of Supporter cards you find there and put them into your hand. Shuffle the other cards back into your deck. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
