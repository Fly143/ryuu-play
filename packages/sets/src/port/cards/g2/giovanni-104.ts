import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Giovanni_104 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "G2";
  public name: string = "Giovanni";
  public fullName: string = "Giovanni G2 104";
  public text: string = "Choose 1 of your Pokémon in play with Giovanni in its name. For the rest of your turn, you may evolve that Pokémon even if you just played or evolved it this turn or if this is your first turn. This effect also applies to the Pokémon it evolves into.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
