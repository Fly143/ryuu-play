import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class HereComesTeamRocket_113 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "EVO";
  public name: string = "Here Comes Team Rocket!";
  public fullName: string = "Here Comes Team Rocket! EVO 113";
  public text: string = "Each player turns all of his or her Prize cards face up. (Those Prize cards remain face up for the rest of the game.)";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
