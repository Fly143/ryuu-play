import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Kahili_210 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "DRM";
  public name: string = "Kahili";
  public fullName: string = "Kahili DRM 210";
  public text: string = "Draw 2 cards. Then, flip a coin. If heads, if you played this Kahili from your hand, put this card into your hand instead of the discard pile. If you have no cards in your deck, you can't play this card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.drawCards(this, store, state, effect).playCard(effect as TrainerEffect, 2);
    }
    return state;
  }
}
