import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Zisu_159 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "BRS";
  public name: string = "Zisu";
  public fullName: string = "Zisu BRS 159";
  public text: string = "Draw cards until you have 1 more card in your hand than your opponent.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.drawUntilHand(this, store, state, effect).playCard(effect as TrainerEffect, 7);
    }
    return state;
  }
}
