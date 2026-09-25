import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class EnergyRoot_83 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "UF";
  public name: string = "Energy Root";
  public fullName: string = "Energy Root UF 83";
  public text: string = "Attach Energy Root to 1 of your Pokémon (excluding Pokémon-ex and Pokémon that has Dark or an owner in its name) that doesn't already have a Pokémon Tool attached to it. If the Pokémon Energy Root is attached to is Pokémon-ex or has Dark or an owner in its name, discard Energy Root. As long as Energy Root is attached to a Pokémon, that Pokémon gets +20 HP and can't use any Poké-Powers or Poké-Bodies.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
