import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TurffieldStadium_234 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "CRE";
  public name: string = "Turffield Stadium";
  public fullName: string = "Turffield Stadium CRE 234";
  public text: string = "Once during each player's turn, that player may search their deck for an Evolution Grass Pokémon, reveal it, and put it into their hand. Then, that player shuffles their deck.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
