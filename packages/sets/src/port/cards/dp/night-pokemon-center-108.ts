import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class NightPokMonCenter_108 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "DP";
  public name: string = "Night Pokémon Center";
  public fullName: string = "Night Pokémon Center DP 108";
  public text: string = "Choose 1 of your Pokémon. Flip 2 coins. If both are heads, remove all damage counters from that Pokémon. If both are tails, discard all Energy cards attached to that Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
