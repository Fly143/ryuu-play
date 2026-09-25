import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PokMonBreeder_102 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "G2";
  public name: string = "Pokémon Breeder";
  public fullName: string = "Pokémon Breeder G2 102";
  public text: string = "Put a Stage 2 Evolution card from your hand on the matching Basic Pokémon. You can play this card only when you would be allowed to evolve that Pokémon anyway.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* structural */ state;
    }
    return state;
  }
}
