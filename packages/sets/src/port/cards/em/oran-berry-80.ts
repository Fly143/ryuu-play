import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class OranBerry_80 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "EM";
  public name: string = "Oran Berry";
  public fullName: string = "Oran Berry EM 80";
  public text: string = "Attach Oran Berry to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If that Pokémon is Knocked Out, discard this card. At any time between turns, if the Pokémon this card is attached to has at least 2 damage counters on it, remove 2 damage counters from it. Then, discard Oran Berry.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
