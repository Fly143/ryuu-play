import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TeamMagmaBelt_81 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "MA";
  public name: string = "Team Magma Belt";
  public fullName: string = "Team Magma Belt MA 81";
  public text: string = "Attach Team Magma Belt to 1 of your Pokémon with Team Magma in its name that doesn't already have a Pokémon Tool attached to it. If that Pokémon is Knocked Out, discard this card. At any time between turns, if the Pokémon Team Magma Belt is attached to is your Active Pokémon, search your deck for a card that evolves from that Pokémon and put it on that Pokémon. (This counts as evolving that Pokémon.) Shuffle your deck afterward, then discard Team Magma Belt.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
