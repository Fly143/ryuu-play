import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class OldPC_164 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "DAA";
  public name: string = "Old PC";
  public fullName: string = "Old PC DAA 164";
  public text: string = "Flip 2 coins. If both are heads, put a card from your discard pile into your hand. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
