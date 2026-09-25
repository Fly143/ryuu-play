import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class JessieJames_68 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "HIF";
  public name: string = "Jessie & James";
  public fullName: string = "Jessie & James HIF 68";
  public text: string = "Each player discards 2 cards from their hand. Your opponent discards first.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.discardFromHandTrainer(this, store, state, effect).playCard(effect as TrainerEffect, 2);
      return commonEffects.discardOpponentHandTrainer(this, store, state, effect).playCard(effect as TrainerEffect, 2);
    }
    return state;
  }
}
