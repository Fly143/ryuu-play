import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class NSCastle_152 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "JTG";
  public name: string = "N's Castle";
  public fullName: string = "N's Castle JTG 152";
  public text: string = "N's Pokémon in play (both yours and your opponent's) have no Retreat Cost.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
