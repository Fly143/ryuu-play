import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MultiTechnicalMachine01_144 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "EX";
  public name: string = "Multi Technical Machine 01";
  public fullName: string = "Multi Technical Machine 01 EX 144";
  public text: string = "Attach this card to 1 of your Pokémon in play. That Pokémon may use this card's attack instead of its own. At the end of your turn, discard Multi Technical Machine 01.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
