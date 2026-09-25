import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PsychicCube01_132 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "AQ";
  public name: string = "Psychic Cube 01";
  public fullName: string = "Psychic Cube 01 AQ 132";
  public text: string = "Attach this card to 1 of your Psychic Pokémon in play. That Pokémon may us this card's attack instead of its own. At the end of your turn, discard Psychic Cube 01.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
