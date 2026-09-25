import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class LanaSAid_219 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "TWM";
  public name: string = "Lana's Aid";
  public fullName: string = "Lana's Aid TWM 219";
  public text: string = "Put up to 3 in any combination of Pokémon that don't have a Rule Box and Basic Energy cards from your discard pile into your hand. (Pokémon ex, Pokémon V, etc. have Rule Boxes.)";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
