import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class OldRod_78 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "DF";
  public name: string = "Old Rod";
  public fullName: string = "Old Rod DF 78";
  public text: string = "Flip 2 coins. If both are heads, search your discard pile for a Basic Pokémon or Evolution card, show it to your opponent, and put it into your hand. If both are tails, search your discard pile for a Trainer card, show it to your opponent, and put it into your hand.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
