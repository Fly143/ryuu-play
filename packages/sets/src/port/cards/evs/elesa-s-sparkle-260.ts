import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ElesaSSparkle_260 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "EVS";
  public name: string = "Elesa's Sparkle";
  public fullName: string = "Elesa's Sparkle EVS 260";
  public text: string = "Choose up to 2 of your Fusion Strike Pokémon. For each of those Pokémon, search your deck for a Fusion Strike Energy card and attach it to that Pokémon. Then, shuffle your deck.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
