import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PokMonReversal_97 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "RG";
  public name: string = "Pokémon Reversal";
  public fullName: string = "Pokémon Reversal RG 97";
  public text: string = "Flip a coin. If heads, choose 1 of your opponent's Benched Pokémon and switch it with 1 of the Defending Pokémon. Your opponent chooses the Defending Pokémon to switch.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
