import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Atticus_133 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "PRE";
  public name: string = "Atticus";
  public fullName: string = "Atticus PRE 133";
  public text: string = "You can use this card only if your opponent's Active Pokémon is Poisoned. Shuffle your hand into your deck. Then, draw 7 cards.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "shuffleDraw:7");
    }
    return state;
  }
}
