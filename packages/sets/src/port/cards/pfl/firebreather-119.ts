import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Firebreather_119 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "PFL";
  public name: string = "Firebreather";
  public fullName: string = "Firebreather PFL 119";
  public text: string = "Search your deck for up to 7 Basic Fire Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.searchEnergyToHand(this, store, state, effect).playCard(effect as TrainerEffect, 7);
    }
    return state;
  }
}
