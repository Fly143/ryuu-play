import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Grusha_184 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "PAL";
  public name: string = "Grusha";
  public fullName: string = "Grusha PAL 184";
  public text: string = "Draw cards until you have 5 cards in your hand. If none of your Pokémon have any Energy attached, draw cards until you have 7 cards in your hand instead.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.drawUntilHand(this, store, state, effect).playCard(effect as TrainerEffect, 5);
      return commonEffects.drawUntilHand(this, store, state, effect).playCard(effect as TrainerEffect, 7);
    }
    return state;
  }
}
