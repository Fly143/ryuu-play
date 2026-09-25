import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TeamGalacticSInventionG105PokTurn_118 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "PL";
  public name: string = "Team Galactic's Invention G-105 Poké Turn";
  public fullName: string = "Team Galactic's Invention G-105 Poké Turn PL 118";
  public text: string = "Return 1 of your Pokémon SP and all cards attached to it to your hand.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
