import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class HealPowder_104 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "N4";
  public name: string = "Heal Powder";
  public fullName: string = "Heal Powder N4 104";
  public text: string = "Flip a coin. If heads, your Active Pokémon is no longer Asleep, Confused, Paralyzed, or Poisoned and remove 2 damage counters from it. If your Active Pokémon has fewer damage counters than that, remove all of them.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* clearSpecialConditions */ state;
    }
    return state;
  }
}
