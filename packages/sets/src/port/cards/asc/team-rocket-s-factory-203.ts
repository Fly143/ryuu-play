import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TeamRocketSFactory_203 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "ASC";
  public name: string = "Team Rocket's Factory";
  public fullName: string = "Team Rocket's Factory ASC 203";
  public text: string = "Once during each player's turn, if they played a Supporter card that has \"Team Rocket\" in its name from their hand this turn, they may draw 2 cards.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
