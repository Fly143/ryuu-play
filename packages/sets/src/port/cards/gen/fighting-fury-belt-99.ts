import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class FightingFuryBelt_99 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "GEN";
  public name: string = "Fighting Fury Belt";
  public fullName: string = "Fighting Fury Belt GEN 99";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. The Basic Pokémon this card is attached to gets +40 HP and its attacks do 10 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance). You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
