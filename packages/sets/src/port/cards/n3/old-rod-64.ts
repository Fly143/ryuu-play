import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class OldRod_64 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "N3";
  public name: string = "Old Rod";
  public fullName: string = "Old Rod N3 64";
  public text: string = "Flip 2 coins. If both are heads, put a Baby Pokémon, Basic Pokémon, or Evolution card from your discard pile into your hand. If both are tails, put a Trainer card from your discard pile into your hand.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
