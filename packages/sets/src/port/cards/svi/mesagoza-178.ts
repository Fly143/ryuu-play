import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Mesagoza_178 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "SVI";
  public name: string = "Mesagoza";
  public fullName: string = "Mesagoza SVI 178";
  public text: string = "Once during each player's turn, that player may flip a coin. If heads, that player searches their deck for a Pokémon, reveals it, and puts it into their hand. Then, that player shuffles their deck.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
