import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Leftovers_99 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "GE";
  public name: string = "Leftovers";
  public fullName: string = "Leftovers GE 99";
  public text: string = "Attach Leftovers to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If that Pokémon is Knocked Out, discard this card. If the Pokémon Leftovers is attached to is your Active Pokémon at the end of your turn, remove 1 damage counter from the Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
