import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class SuperiorEnergyRetrieval_103 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "FLF";
  public name: string = "Superior Energy Retrieval";
  public fullName: string = "Superior Energy Retrieval FLF 103";
  public text: string = "Discard 2 cards from your hand. (If you can't discard 2 cards, you can't play this card.) Put 4 basic Energy cards from your discard pile into your hand. (You can't choose a card you discarded with the effect of this card.) You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "recoverEnergyFromDiscard:4");
    }
    return state;
  }
}
