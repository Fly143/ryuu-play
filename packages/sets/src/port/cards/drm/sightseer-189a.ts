import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Sightseer_189a extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "DRM";
  public name: string = "Sightseer";
  public fullName: string = "Sightseer DRM 189a";
  public text: string = "You may discard any number of cards from your hand. Then, draw cards until you have 5 cards in your hand. If you can't draw any cards in this way, you can't play this card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.drawUntilHand(this, store, state, effect).playCard(effect as TrainerEffect, 5);
    }
    return state;
  }
}
