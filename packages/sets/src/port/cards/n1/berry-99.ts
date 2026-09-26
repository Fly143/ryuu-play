import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Berry_99 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "N1";
  public name: string = "Berry";
  public fullName: string = "Berry N1 99";
  public text: string = "Attach Berry to 1 of your Pokémon that doesn't have a Pokémon Tool attached to it. At any time between turns, if there are at least 2 damage counters on the Pokémon Berry is attached to, you may remove 2 of them and discard Berry. At the start of each turn, if there are at least 2 damage counters on the Pokémon Berry is attached to, remove 2 of them and discard Berry.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.recoverFromDiscard(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
