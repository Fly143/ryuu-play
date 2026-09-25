import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class SuperRod_20 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "DRV";
  public name: string = "Super Rod";
  public fullName: string = "Super Rod DRV 20";
  public text: string = "Shuffle 3 in any combination of Pokémon and basic Energy cards from your discard pile back into your deck. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "shuffleCardsFromDiscardToDeck:3");
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "shuffleCardsFromDiscardToDeck:3");
    }
    return state;
  }
}
