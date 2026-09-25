import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class LakeBoundary_112 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "MT";
  public name: string = "Lake Boundary";
  public fullName: string = "Lake Boundary MT 112";
  public text: string = "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card. Apply Weakness for each Pokémon (both yours and your opponent's) as ×2 instead.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
