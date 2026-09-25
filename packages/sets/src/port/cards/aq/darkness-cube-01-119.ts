import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class DarknessCube01_119 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "AQ";
  public name: string = "Darkness Cube 01";
  public fullName: string = "Darkness Cube 01 AQ 119";
  public text: string = "Attach this card to 1 of your Darkness Pokémon in play. That Pokémon may use this card's attack instead of its own. At the end of your turn, discard Darkness Cube 01.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
