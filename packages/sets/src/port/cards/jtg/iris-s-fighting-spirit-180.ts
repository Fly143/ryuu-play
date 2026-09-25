import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class IrisSFightingSpirit_180 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "JTG";
  public name: string = "Iris's Fighting Spirit";
  public fullName: string = "Iris's Fighting Spirit JTG 180";
  public text: string = "You can use this card only if you discard another card from your hand. Draw cards until you have 6 cards in your hand.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.drawUntilHand(this, store, state, effect).playCard(effect as TrainerEffect, 6);
    }
    return state;
  }
}
