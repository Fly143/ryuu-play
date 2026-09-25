import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PokMonCenter_40 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "BP";
  public name: string = "Pokémon Center";
  public fullName: string = "Pokémon Center BP 40";
  public text: string = "Remove all damage counters from all of your own Pokémon with damage counters on them, then discard all Energy cards attached to those Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* pokemonCenter */ state;
    }
    return state;
  }
}
