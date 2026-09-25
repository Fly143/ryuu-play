import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class EnergyAmplifier_98 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "N4";
  public name: string = "Energy Amplifier";
  public fullName: string = "Energy Amplifier N4 98";
  public text: string = "Choose an Energy card in your hand, show it to your opponent, and shuffle it into your deck. Then flip a coin. If heads, search your deck for up to 3 basic Energy cards. Show them to your opponent, and put them into your hand. Shuffle your deck afterward.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.searchEnergyToHand(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
