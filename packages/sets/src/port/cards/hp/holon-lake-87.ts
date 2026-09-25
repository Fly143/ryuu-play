import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class HolonLake_87 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "HP";
  public name: string = "Holon Lake";
  public fullName: string = "Holon Lake HP 87";
  public text: string = "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card. Each player's Pokémon that has δ on its card can use attacks on this card instead of its own.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
