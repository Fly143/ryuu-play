import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TeamRocketSHandiwork_124 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "FAC";
  public name: string = "Team Rocket's Handiwork";
  public fullName: string = "Team Rocket's Handiwork FAC 124";
  public text: string = "Flip 2 coins. For each heads, discard 2 cards from the top of your opponent's deck.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
