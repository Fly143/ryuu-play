import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class EnergyRetrieval_160 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "SSH";
  public name: string = "Energy Retrieval";
  public fullName: string = "Energy Retrieval SSH 160";
  public text: string = "Put up to 2 basic Energy cards from your discard pile into your hand. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "recoverEnergyFromDiscard:2");
    }
    return state;
  }
}
