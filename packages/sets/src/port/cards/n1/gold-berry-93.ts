import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class GoldBerry_93 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "N1";
  public name: string = "Gold Berry";
  public fullName: string = "Gold Berry N1 93";
  public text: string = "Attach Gold Berry to 1 of your Pokémon that doesn't have a Pokémon Tool attached to it. At any time between turns, if there are at least 4 damage counters on the Pokémon Gold Berry is attached to, you may remove 4 of them and discard Gold Berry. At the start of each turn, if there are at least 4 damage counters on the Pokémon Gold Berry is attached to, remove 4 of them and discard Gold Berry.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.recoverFromDiscard(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
