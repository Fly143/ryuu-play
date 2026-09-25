import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class SingleStrikeStyleMustard_163 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "SHF";
  public name: string = "Single Strike Style Mustard";
  public fullName: string = "Single Strike Style Mustard SHF 163";
  public text: string = "You can play this card only when it is the last card in your hand. Search your deck for a Single Strike Pokémon and put it onto your Bench. Then, shuffle your deck. If you searched your deck in this way, draw 5 cards.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.drawCards(this, store, state, effect).playCard(effect as TrainerEffect, 5);
    }
    return state;
  }
}
