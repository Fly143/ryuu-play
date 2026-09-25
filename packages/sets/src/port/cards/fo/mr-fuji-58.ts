import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MrFuji_58 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "FO";
  public name: string = "Mr. Fuji";
  public fullName: string = "Mr. Fuji FO 58";
  public text: string = "Choose a Pokémon on your Bench. Shuffle it and any cards attached to it into your deck.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "shuffleBenchToDeck");
    }
    return state;
  }
}
