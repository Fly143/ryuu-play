import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TownStore_196 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "OBF";
  public name: string = "Town Store";
  public fullName: string = "Town Store OBF 196";
  public text: string = "Once during each player's turn, that player may search their deck for a Pokémon Tool card, reveal it, and put it into their hand. Then, that player shuffles their deck.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
