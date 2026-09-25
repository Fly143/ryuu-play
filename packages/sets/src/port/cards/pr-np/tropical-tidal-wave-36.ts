import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TropicalTidalWave_36 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "PR-NP";
  public name: string = "Tropical Tidal Wave";
  public fullName: string = "Tropical Tidal Wave PR-NP 36";
  public text: string = "Flip a coin. If heads, discard all Trainer cards your opponent has in play. If tails, discard all Trainer cards (excluding Supporter cards) you have in play.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
