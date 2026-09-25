import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PokMonCirculator_81 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "UL";
  public name: string = "Pokémon Circulator";
  public fullName: string = "Pokémon Circulator UL 81";
  public text: string = "Your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
