import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class RiskyRuins_127 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "MEG";
  public name: string = "Risky Ruins";
  public fullName: string = "Risky Ruins MEG 127";
  public text: string = "Whenever any player puts a Basic non-Darkness Pokémon onto their Bench during their turn, place 2 damage counters on that Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
