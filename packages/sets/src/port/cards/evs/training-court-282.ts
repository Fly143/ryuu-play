import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TrainingCourt_282 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "EVS";
  public name: string = "Training Court";
  public fullName: string = "Training Court EVS 282";
  public text: string = "Once during each player's turn, that player may put a basic Energy card from their discard pile into their hand.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
