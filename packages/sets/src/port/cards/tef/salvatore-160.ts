import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Salvatore_160 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "TEF";
  public name: string = "Salvatore";
  public fullName: string = "Salvatore TEF 160";
  public text: string = "Search your deck for a card that has no Abilities and evolves from 1 of your Pokémon, and put it onto that Pokémon to evolve it. Then, shuffle your deck. You can use this card on a Pokémon you put down when you were setting up to play or on a Pokémon that was put into play this turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
