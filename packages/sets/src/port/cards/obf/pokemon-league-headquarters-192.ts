import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PokMonLeagueHeadquarters_192 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "OBF";
  public name: string = "Pokémon League Headquarters";
  public fullName: string = "Pokémon League Headquarters OBF 192";
  public text: string = "Attacks used by each Basic Pokémon in play (both yours and your opponent's) cost Colorless more.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
