import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class VSSeeker_110 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "AOR";
  public name: string = "VS Seeker";
  public fullName: string = "VS Seeker AOR 110";
  public text: string = "Put a Supporter card from your discard pile into your hand. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.searchToHand(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
