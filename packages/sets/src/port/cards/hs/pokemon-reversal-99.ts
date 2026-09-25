import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PokMonReversal_99 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "HS";
  public name: string = "Pokémon Reversal";
  public fullName: string = "Pokémon Reversal HS 99";
  public text: string = "Flip a coin. If heads, choose 1 of your opponent's Benched Pokémon, and switch it with your opponent's Active Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
