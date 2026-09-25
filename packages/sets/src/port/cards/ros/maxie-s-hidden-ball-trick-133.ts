import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MaxieSHiddenBallTrick_133 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "ROS";
  public name: string = "Maxie's Hidden Ball Trick";
  public fullName: string = "Maxie's Hidden Ball Trick ROS 133";
  public text: string = "You can play this card only when it is the last card in your hand. Put a Fighting Pokémon from your discard pile onto your Bench. Then, draw 5 cards.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
