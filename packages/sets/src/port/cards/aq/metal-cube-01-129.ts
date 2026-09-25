import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MetalCube01_129 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "AQ";
  public name: string = "Metal Cube 01";
  public fullName: string = "Metal Cube 01 AQ 129";
  public text: string = "Attach this card to 1 of your Metal Pokémon in play. That Pokémon may use this card's attack instead of its own. At the end of your turn, discard Metal Cube 01.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
