import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PokStop_68 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "PGO";
  public name: string = "PokéStop";
  public fullName: string = "PokéStop PGO 68";
  public text: string = "Once during each player's turn, that player may discard 3 cards from the top of their deck. If a player discarded any Item cards in this way, they put those Item cards into their hand.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
