import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Magnifier_101 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "N4";
  public name: string = "Magnifier";
  public fullName: string = "Magnifier N4 101";
  public text: string = "Attach Magnifier to 1 of your Pokémon. At the end of your turn, discard Magnifier. If the Pokémon Magnifier is attached to attacks, don't apply Resistance for that attack.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
