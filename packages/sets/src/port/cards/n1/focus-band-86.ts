import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class FocusBand_86 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "N1";
  public name: string = "Focus Band";
  public fullName: string = "Focus Band N1 86";
  public text: string = "Attach Focus Band to 1 of your Pokémon that doesn't have a Pokémon Tool attached to it. If the Pokémon Focus Band is attached to would be Knocked Out by your opponent's attack, flip a coin. If heads, that Pokémon is not Knocked Out and its remaining HP become 10 instead. Then, discard Focus Band.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
