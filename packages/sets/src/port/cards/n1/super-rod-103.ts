import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class SuperRod_103 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "N1";
  public name: string = "Super Rod";
  public fullName: string = "Super Rod N1 103";
  public text: string = "Flip a coin. If heads, put an Evolution card from your discard pile, if any, into your hand. If tails, put a Basic Pokémon card from your discard pile, if any, into your hand.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "shuffleCardsFromDiscardToDeck:3");
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "shuffleCardsFromDiscardToDeck:3");
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "shuffleCardsFromDiscardToDeck:3");
    }
    return state;
  }
}
