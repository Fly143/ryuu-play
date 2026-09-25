import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class DomeFossilKabuto_96 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "FAC";
  public name: string = "Dome Fossil Kabuto";
  public fullName: string = "Dome Fossil Kabuto FAC 96";
  public text: string = "Look at the bottom 7 cards of your deck. You may reveal a Kabuto you find there and put it onto your Bench. Shuffle the other cards back into your deck. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* searchBasicToBench:1 */ state;
    }
    return state;
  }
}
