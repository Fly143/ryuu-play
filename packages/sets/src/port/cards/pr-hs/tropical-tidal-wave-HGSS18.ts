import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TropicalTidalWaveHGSS18 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "PR-HS";
  public name: string = "Tropical Tidal Wave";
  public fullName: string = "Tropical Tidal Wave PR-HS HGSS18";
  public text: string = "Flip a coin. If heads, discard all Trainer and Stadium cards your opponent has in play. If tails, discard all Trainer and Stadium cards you have in play.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
