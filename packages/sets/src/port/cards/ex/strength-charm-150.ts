import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class StrengthCharm_150 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "EX";
  public name: string = "Strength Charm";
  public fullName: string = "Strength Charm EX 150";
  public text: string = "Attach Strength Charm to 1 of your Pokémon that doesn't have a Pokémon Tool attached to it. Whenever an attack from the Pokémon that Strength Charm is attached to does damage (after applying Weakness and Resistance), the attack does 10 more damage. At the end of your turn in which this happens, discard Strength Charm.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
