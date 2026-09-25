import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class HolonFossil_86 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "HP";
  public name: string = "Holon Fossil";
  public fullName: string = "Holon Fossil HP 86";
  public text: string = "Flip a coin. If heads, search your deck for an Omanyte, Kabuto, Aerodactyl, Aerodactyl ex, Lileep, or Anorith and put it onto your Bench. Shuffle your deck afterward. If tails, put an Omanyte, Kabuto, Aerodactyl, Aerodactyl ex, Lileep, or Anorith from your hand onto your Bench. Treat the new Benched Pokémon as a Basic Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
