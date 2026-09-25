import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Worker_195 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "PGO";
  public name: string = "Worker";
  public fullName: string = "Worker PGO 195";
  public text: string = "Draw 3 cards. Discard a Stadium in play.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.drawCards(this, store, state, effect).playCard(effect as TrainerEffect, 3);
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "discardStadium");
    }
    return state;
  }
}
