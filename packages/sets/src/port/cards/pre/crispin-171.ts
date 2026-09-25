import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Crispin_171 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "PRE";
  public name: string = "Crispin";
  public fullName: string = "Crispin PRE 171";
  public text: string = "Search your deck for up to 2 Basic Energy cards of different types, reveal them, and put 1 of them into your hand. Attach the other to 1 of your Pokémon. Then, shuffle your deck.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.searchEnergyToHand(this, store, state, effect).playCard(effect as TrainerEffect, 2);
    }
    return state;
  }
}
