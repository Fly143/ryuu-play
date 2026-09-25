import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class FullHeal_93 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "HS";
  public name: string = "Full Heal";
  public fullName: string = "Full Heal HS 93";
  public text: string = "Remove all Special Conditions from your Active Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* clearSpecialConditions */ state;
    }
    return state;
  }
}
