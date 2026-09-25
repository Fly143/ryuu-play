import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Kieran_174 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "PRE";
  public name: string = "Kieran";
  public fullName: string = "Kieran PRE 174";
  public text: string = "Choose 1: • Switch your Active Pokémon with 1 of your Benched Pokémon. • During this turn, attacks used by your Pokémon do 30 more damage to your opponent's Active Pokémon ex and Active Pokémon V (before applying Weakness and Resistance).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
