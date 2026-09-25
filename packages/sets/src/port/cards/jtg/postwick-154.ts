import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Postwick_154 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "JTG";
  public name: string = "Postwick";
  public fullName: string = "Postwick JTG 154";
  public text: string = "Attacks used by Hop's Pokémon (both yours and your opponent's) do 30 more damage to the opponent's Active Pokémon (before applying Weakness and Resistance).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
