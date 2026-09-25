import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TrainingCourt_169 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "RCL";
  public name: string = "Training Court";
  public fullName: string = "Training Court RCL 169";
  public text: string = "Once during each player's turn, that player may put a basic Energy card from their discard pile into their hand. This Stadium stays in play when you play it. Discard it if another Stadium comes into play. If a Stadium with the same name is in play, you can't play this card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
