import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PokMonFlute_86 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "BS";
  public name: string = "Pokémon Flute";
  public fullName: string = "Pokémon Flute BS 86";
  public text: string = "Choose 1 Basic Pokémon card from your opponent's discard pile and put it onto his or her Bench. (You can't play Pokémon Flute if your opponent's Bench is full.)";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* pokemonFlute */ state;
    }
    return state;
  }
}
