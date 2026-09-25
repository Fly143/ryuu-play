import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class SabrinaBrycenSM246 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "PR-SM";
  public name: string = "Sabrina & Brycen";
  public fullName: string = "Sabrina & Brycen PR-SM SM246";
  public text: string = "Search your deck for up to 2 basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck. When you play this card, you may discard 5 other cards from your hand. If you do, you may also search for up to 3 Pokémon of different types in this way.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.searchEnergyToHand(this, store, state, effect).playCard(effect as TrainerEffect, 2);
    }
    return state;
  }
}
