import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class FightingCube01_121 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "AQ";
  public name: string = "Fighting Cube 01";
  public fullName: string = "Fighting Cube 01 AQ 121";
  public text: string = "Attach this card to 1 of your Fighting Pokémon in play. That Pokémon my use this card's attack instead of its own. At the end of your turn, discard Fighting Cube 01.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "copyAttack");
    }
    return state;
  }
}
