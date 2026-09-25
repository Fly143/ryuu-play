import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class EnergyArk_75 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "N2";
  public name: string = "Energy Ark";
  public fullName: string = "Energy Ark N2 75";
  public text: string = "Flip 2 coins. For each heads, search your deck for a Basic Energy card. Show that card to your opponent, then put it into your hand. Shuffle your deck afterward.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.searchEnergyToHand(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
