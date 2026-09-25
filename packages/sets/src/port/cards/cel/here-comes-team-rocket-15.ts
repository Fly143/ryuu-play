import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class HereComesTeamRocket_152 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "CEL";
  public name: string = "Here Comes Team Rocket!";
  public fullName: string = "Here Comes Team Rocket! CEL 15";
  public text: string = "Each player plays with his or her Prize cards face up for the rest of the game.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "showPrizes");
    }
    return state;
  }
}
