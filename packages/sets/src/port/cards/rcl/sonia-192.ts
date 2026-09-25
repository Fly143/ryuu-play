import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Sonia_192 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "RCL";
  public name: string = "Sonia";
  public fullName: string = "Sonia RCL 192";
  public text: string = "Search your deck for up to 2 Basic Pokémon or up to 2 basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.searchEnergyToHand(this, store, state, effect).playCard(effect as TrainerEffect, 2);
    }
    return state;
  }
}
