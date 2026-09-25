import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Caretaker_144 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "TWM";
  public name: string = "Caretaker";
  public fullName: string = "Caretaker TWM 144";
  public text: string = "Draw 2 cards. If you drew any cards in this way and if Community Center is in play, shuffle this Caretaker into your deck instead of discarding it.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.drawCards(this, store, state, effect).playCard(effect as TrainerEffect, 2);
    }
    return state;
  }
}
