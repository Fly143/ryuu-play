import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class StrengthCharm_81 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "DF";
  public name: string = "Strength Charm";
  public fullName: string = "Strength Charm DF 81";
  public text: string = "Attach Strength Charm to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If that Pokémon is Knocked Out, discard this card. Whenever an attack from the Pokémon that Strength Charm is attached to does damage to the Active Pokémon, this attack does 10 more damage (before applying Weakness and Resistance). Discard Strength Charm at the end of the turn in which this Pokémon attacks.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.recoverFromDiscard(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
