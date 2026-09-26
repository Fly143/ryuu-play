import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MiracleBerry_94 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "N1";
  public name: string = "Miracle Berry";
  public fullName: string = "Miracle Berry N1 94";
  public text: string = "Attach Miracle Berry to 1 of your Pokémon that doesn't have a Pokémon Tool attached to it. At any time between turns, if the Pokémon Miracle Berry is attached to is Asleep, Confused, Paralyzed, or Poisoned, you may remove all those effects from that Pokémon and discard Miracle Berry. At the start of each turn, if the Pokémon Miracle Berry is attached to is Asleep, Confused, Paralyzed, or Poisoned, remove all of those effects from that Pokémon and discard Miracle Berry.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.recoverFromDiscard(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
