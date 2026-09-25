import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class AcerolaSMischief_183 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "MEG";
  public name: string = "Acerola's Mischief";
  public fullName: string = "Acerola's Mischief MEG 183";
  public text: string = "You can use this card only if your opponent has 2 or fewer Prize cards remaining. Choose 1 of your Pokémon in play. During your opponent's next turn, prevent all damage from and effects of attacks done to that Pokémon by your opponent's Pokémon ex.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
