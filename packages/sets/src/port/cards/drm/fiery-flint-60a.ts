import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class FieryFlint_60a extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "DRM";
  public name: string = "Fiery Flint";
  public fullName: string = "Fiery Flint DRM 60a";
  public text: string = "You can play this card only if you discard 2 other cards from your hand. Search your deck for up to 4 Fire Energy cards, reveal them, and put them into your hand. Then, shuffle your deck. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.discardFromHandTrainer(this, store, state, effect).playCard(effect as TrainerEffect, 2);
      return commonEffects.searchToHand(this, store, state, effect).playCard(effect as TrainerEffect, 2);
    }
    return state;
  }
}
