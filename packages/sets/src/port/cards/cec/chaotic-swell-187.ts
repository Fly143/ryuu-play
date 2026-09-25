import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ChaoticSwell_187 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "CEC";
  public name: string = "Chaotic Swell";
  public fullName: string = "Chaotic Swell CEC 187";
  public text: string = "Whenever either player plays a Stadium card from their hand, discard that Stadium card after discarding this one. (The new Stadium card has no effect.) This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
