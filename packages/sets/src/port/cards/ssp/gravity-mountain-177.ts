import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class GravityMountain_177 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "SSP";
  public name: string = "Gravity Mountain";
  public fullName: string = "Gravity Mountain SSP 177";
  public text: string = "Each Stage 2 Pokémon in play (both yours and your opponent's) gets -30 HP.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
