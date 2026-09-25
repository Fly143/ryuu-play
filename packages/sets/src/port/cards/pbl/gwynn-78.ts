import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Gwynn_78 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "PBL";
  public name: string = "Gwynn";
  public fullName: string = "Gwynn PBL 78";
  public text: string = "Discard up to 2 Pokémon that don't have a Rule Box from your hand, and draw 3 cards for each card you discarded in this way. (Pokémon ex, Pokémon V_atk, etc. have Rule Boxes.)";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
