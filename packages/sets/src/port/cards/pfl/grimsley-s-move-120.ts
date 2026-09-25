import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class GrimsleySMove_120 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "PFL";
  public name: string = "Grimsley's Move";
  public fullName: string = "Grimsley's Move PFL 120";
  public text: string = "Look at the top 7 cards of your deck and put a Darkness Pokémon you find there onto your Bench. Shuffle the other cards and put them on the bottom of your deck. You can't use this card during your first turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "searchBasicToBench:1");
    }
    return state;
  }
}
