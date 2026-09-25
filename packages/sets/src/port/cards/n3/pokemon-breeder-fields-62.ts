import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PokMonBreederFields_62 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "N3";
  public name: string = "Pokémon Breeder Fields";
  public fullName: string = "Pokémon Breeder Fields N3 62";
  public text: string = "Flip a coin for 1 or 2 of your non-Baby Pokémon that can evolve. For each heads, search your deck for a later-Stage card that matches that Pokémon. Then put that card into your hand. Shuffle your deck afterward.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
