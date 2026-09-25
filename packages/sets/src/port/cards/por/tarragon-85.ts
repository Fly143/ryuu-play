import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Tarragon_85 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "POR";
  public name: string = "Tarragon";
  public fullName: string = "Tarragon POR 85";
  public text: string = "Put up to 4 in any combination of Fighting Pokémon and Basic Fighting Energy cards from your discard pile into your hand.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.recoverFromDiscard(this, store, state, effect).playCard(effect as TrainerEffect, 4);
    }
    return state;
  }
}
