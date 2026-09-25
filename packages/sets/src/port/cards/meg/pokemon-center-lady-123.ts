import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PokMonCenterLady_123 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "MEG";
  public name: string = "Pokémon Center Lady";
  public fullName: string = "Pokémon Center Lady MEG 123";
  public text: string = "Heal 60 damage from 1 of your Pokémon, and it recovers from all Special Conditions.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.healDamage(this, store, state, effect).playCard(effect as TrainerEffect, 60);
    }
    return state;
  }
}
