import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class BeastRing_102a extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "FLI";
  public name: string = "Beast Ring";
  public fullName: string = "Beast Ring FLI 102a";
  public text: string = "You can play this card only if your opponent has exactly 3 or 4 Prize cards remaining. Search your deck for up to 2 basic Energy cards and attach them to 1 of your Ultra Beasts. Then, shuffle your deck. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.searchEnergyToHand(this, store, state, effect).playCard(effect as TrainerEffect, 2);
    }
    return state;
  }
}
