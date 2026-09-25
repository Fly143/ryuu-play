import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class JubilifeVillage_212 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "BRS";
  public name: string = "Jubilife Village";
  public fullName: string = "Jubilife Village BRS 212";
  public text: string = "Once during each player's turn, that player may shuffle their hand into their deck and draw 5 cards. If they do, their turn ends.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
