import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class UltraReconSquad_131 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "FLI";
  public name: string = "Ultra Recon Squad";
  public fullName: string = "Ultra Recon Squad FLI 131";
  public text: string = "Discard up to 2 Ultra Beast cards from your hand. Draw 3 cards for each card you discarded in this way.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
