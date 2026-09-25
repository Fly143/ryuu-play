import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ProtectiveOrb_90 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "UF";
  public name: string = "Protective Orb";
  public fullName: string = "Protective Orb UF 90";
  public text: string = "Attach Protective Orb to 1 of your Evolved Pokémon (excluding Pokémon-ex) that doesn't already have a Pokémon Tool attached to it. If the Pokémon Protective Orb is attached to is a Basic Pokémon or Pokémon-ex, discard Protective Orb. As long as Protective Orb is attached to a Pokémon, that Pokémon has no Weakness.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* structural */ state;
    }
    return state;
  }
}
