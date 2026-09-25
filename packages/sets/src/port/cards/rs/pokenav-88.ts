import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PokNav_88 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "RS";
  public name: string = "PokéNav";
  public fullName: string = "PokéNav RS 88";
  public text: string = "Look at the top 3 cards of your deck, and choose a Basic Pokémon, Evolution card, or Energy card. Show it to your opponent and put it into your hand. Put the 2 other cards back on top of your deck in any order.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
