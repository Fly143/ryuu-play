import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MoonlitHill_81 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "PAF";
  public name: string = "Moonlit Hill";
  public fullName: string = "Moonlit Hill PAF 81";
  public text: string = "Once during each player's turn, that player may discard a Basic Psychic Energy card from their hand in order to heal 30 damage from each of their Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
