import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class CursePowder_80 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "UF";
  public name: string = "Curse Powder";
  public fullName: string = "Curse Powder UF 80";
  public text: string = "Attach Curse Powder to 1 of your Evolved Pokémon (excluding Pokémon-ex) that doesn't already have a Pokémon Tool attached to it. If the Pokémon Curse Powder is attached to is a Basic Pokémon or Pokémon-ex, discard Curse Powder. If the Pokémon that Curse Powder is attached to is your Active Pokémon and is Knocked Out by damage from an opponent's attack, put 3 damage counters on the Attacking Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
