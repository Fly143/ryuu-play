import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class JanineSSecretArt_112 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "PRE";
  public name: string = "Janine's Secret Art";
  public fullName: string = "Janine's Secret Art PRE 112";
  public text: string = "Choose up to 2 of your Darkness Pokémon. For each of those Pokémon, search your deck for a Basic Darkness Energy card and attach it to that Pokémon. Then, shuffle your deck. If you attached Energy to your Active Pokémon in this way, it is now Poisoned.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
