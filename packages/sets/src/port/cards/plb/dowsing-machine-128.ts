import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class DowsingMachine_128 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "PLB";
  public name: string = "Dowsing Machine";
  public fullName: string = "Dowsing Machine PLB 128";
  public text: string = "Discard 2 cards from your hand. (If you can't discard 2 cards, you can't play this card.) Put a Trainer card from your discard pile into your hand. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.searchToHand(this, store, state, effect).playCard(effect as TrainerEffect, 1);
      return commonEffects.searchToHand(this, store, state, effect).playCard(effect as TrainerEffect, 1);
      return commonEffects.searchToHand(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
