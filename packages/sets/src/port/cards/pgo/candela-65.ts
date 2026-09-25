import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Candela_65 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "PGO";
  public name: string = "Candela";
  public fullName: string = "Candela PGO 65";
  public text: string = "Draw 2 cards. If you drew any cards in this way, flip a coin. If heads, attach a Fire Energy card from your discard pile to 1 of your Benched Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.drawCards(this, store, state, effect).playCard(effect as TrainerEffect, 2);
    }
    return state;
  }
}
