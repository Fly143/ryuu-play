import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Artazon_229 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "OBF";
  public name: string = "Artazon";
  public fullName: string = "Artazon OBF 229";
  public text: string = "Once during each player's turn, that player may search their deck for a Basic Pokémon that doesn't have a Rule Box and put it onto their Bench. Then, that player shuffles their deck. (Pokémon ex, Pokémon V, etc. have Rule Boxes.)";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
