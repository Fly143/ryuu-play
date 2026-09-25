import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class AcroBike_123a extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "CES";
  public name: string = "Acro Bike";
  public fullName: string = "Acro Bike CES 123a";
  public text: string = "Look at the top 2 cards of your deck and put 1 of them into your hand. Discard the other card. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "pokedex");
      return commonEffects.drawCards(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
