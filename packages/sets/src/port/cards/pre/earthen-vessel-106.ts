import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class EarthenVessel_106 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "PRE";
  public name: string = "Earthen Vessel";
  public fullName: string = "Earthen Vessel PRE 106";
  public text: string = "You can use this card only if you discard another card from your hand. Search your deck for up to 2 Basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.searchEnergyToHand(this, store, state, effect).playCard(effect as TrainerEffect, 2);
    }
    return state;
  }
}
