import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TeamRocketSWatchtower_180 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "DRI";
  public name: string = "Team Rocket's Watchtower";
  public fullName: string = "Team Rocket's Watchtower DRI 180";
  public text: string = "Colorless Pokémon in play (both yours and your opponent's) have no Abilities.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
