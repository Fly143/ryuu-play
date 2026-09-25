import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class GreatHaulNet_78 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "CRI";
  public name: string = "Great Haul Net";
  public fullName: string = "Great Haul Net CRI 78";
  public text: string = "Choose 1 or both: • Shuffle up to 3 Water Pokémon from your discard pile into your deck. • Shuffle up to 3 Basic Water Energy cards from your discard pile into your deck.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
