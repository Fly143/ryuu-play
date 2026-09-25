import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TeamYellSCheer_149 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "FST";
  public name: string = "Team Yell's Cheer";
  public fullName: string = "Team Yell's Cheer FST 149";
  public text: string = "Shuffle up to 3 in any combination of Pokémon and Supporter cards, except for Team Yell's Cheer, from your discard pile into your deck.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
