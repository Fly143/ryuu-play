import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TremendousBomb_113 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "PBL";
  public name: string = "Tremendous Bomb";
  public fullName: string = "Tremendous Bomb PBL 113";
  public text: string = "If the Pokémon this card is attached to isn't a Mega Evolution Pokémon ex, is in the Active Spot, and takes 240 or more damage from an attack from your opponent's Mega Evolution Pokémon ex (even if this Pokémon is Knocked Out), place 12 damage counters on the Attacking Pokémon. If you placed any damage counters in this way, discard this card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
