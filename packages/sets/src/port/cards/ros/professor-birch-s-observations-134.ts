import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ProfessorBirchSObservations_134 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "ROS";
  public name: string = "Professor Birch's Observations";
  public fullName: string = "Professor Birch's Observations ROS 134";
  public text: string = "Shuffle your hand into your deck and flip a coin. If heads, draw 7 cards. If tails, draw 4 cards.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
