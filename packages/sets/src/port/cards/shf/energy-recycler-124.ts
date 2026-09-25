import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class EnergyRecycler_124 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "SHF";
  public name: string = "Energy Recycler";
  public fullName: string = "Energy Recycler SHF 124";
  public text: string = "Shuffle up to 5 basic Energy cards from your discard pile into your deck. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "shuffleCardsFromDiscardToDeck:5");
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "shuffleCardsFromDiscardToDeck:5");
    }
    return state;
  }
}
