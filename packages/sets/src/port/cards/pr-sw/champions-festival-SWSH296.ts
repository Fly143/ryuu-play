import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ChampionsFestivalSWSH296 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "PR-SW";
  public name: string = "Champions Festival";
  public fullName: string = "Champions Festival PR-SW SWSH296";
  public text: string = "Once during each player's turn, if that player has 6 Pokémon in play, they may heal 10 damage from each of their Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
