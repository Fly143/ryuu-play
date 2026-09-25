import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class WaterCube01_140 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "AQ";
  public name: string = "Water Cube 01";
  public fullName: string = "Water Cube 01 AQ 140";
  public text: string = "Attach this card to 1 of your Water Pokémon in play. That Pokémon may use this card's attack instead of its own. At the end of your turn, discard Water Cube 01.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "copyAttack");
    }
    return state;
  }
}
