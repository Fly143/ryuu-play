import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class NightMaintenance_120 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "SW";
  public name: string = "Night Maintenance";
  public fullName: string = "Night Maintenance SW 120";
  public text: string = "Search your discard pile for up to 3 in any combination of Pokémon and basic Energy cards. Show them to your opponent and shuffle them into your deck.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.recoverFromDiscard(this, store, state, effect).playCard(effect as TrainerEffect, 3);
    }
    return state;
  }
}
