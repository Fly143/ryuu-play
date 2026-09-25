import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ErikaSKindness_103 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "G2";
  public name: string = "Erika's Kindness";
  public fullName: string = "Erika's Kindness G2 103";
  public text: string = "Remove 2 damage counters from each Pokémon (yours and your opponent's) with any damage counters on it. If a Pokémon has just 1 damage counter, remove it.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
