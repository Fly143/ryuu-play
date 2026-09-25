import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class NoRemovalGym_103 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "G1";
  public name: string = "No Removal Gym";
  public fullName: string = "No Removal Gym G1 103";
  public text: string = "This card stays in play when you play it. Discard this card if another Stadium card comes into play. A player must discard 2 cards from his or her hand in order to play an Energy Removal or Super Energy Removal card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
