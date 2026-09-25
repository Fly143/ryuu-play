import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class DarkBell_106 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "PBL";
  public name: string = "Dark Bell";
  public fullName: string = "Dark Bell PBL 106";
  public text: string = "Both Active non-Darkness Pokémon are now Confused.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
