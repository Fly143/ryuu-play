import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class FullHeal_82 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "BS";
  public name: string = "Full Heal";
  public fullName: string = "Full Heal BS 82";
  public text: string = "Your Active Pokémon is no longer Asleep, Confused, Paralyzed, or Poisoned.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* clearSpecialConditions */ state;
    }
    return state;
  }
}
