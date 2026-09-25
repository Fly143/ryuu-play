import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Delinquent_98b extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "GEN";
  public name: string = "Delinquent";
  public fullName: string = "Delinquent GEN 98b";
  public text: string = "Discard any Stadium card in play. If you do, your opponent discards 3 cards from his or her hand.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "discardStadium");
      return commonEffects.discardOpponentHandTrainer(this, store, state, effect).playCard(effect as TrainerEffect, 3);
    }
    return state;
  }
}
