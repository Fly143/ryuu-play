import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class RapidStrikeStyleMustard_132 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "SHF";
  public name: string = "Rapid Strike Style Mustard";
  public fullName: string = "Rapid Strike Style Mustard SHF 132";
  public text: string = "You can play this card only when it is the last card in your hand. Put a Rapid Strike Pokémon from your discard pile onto your Bench. If you do, draw 5 cards.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.drawCards(this, store, state, effect).playCard(effect as TrainerEffect, 5);
    }
    return state;
  }
}
