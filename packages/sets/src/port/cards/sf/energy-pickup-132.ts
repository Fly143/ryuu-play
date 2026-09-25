import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class EnergyPickup_132 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "SF";
  public name: string = "Energy Pickup";
  public fullName: string = "Energy Pickup SF 132";
  public text: string = "Flip a coin. If heads, search your discard pile for a basic Energy card and attach it to 1 of your Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
