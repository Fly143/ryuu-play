import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class SuperRod_188 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "PAL";
  public name: string = "Super Rod";
  public fullName: string = "Super Rod PAL 188";
  public text: string = "Shuffle up to 3 in any combination of Pokémon and Basic Energy cards from your discard pile into your deck. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "shuffleCardsFromDiscardToDeck:3");
    }
    return state;
  }
}
