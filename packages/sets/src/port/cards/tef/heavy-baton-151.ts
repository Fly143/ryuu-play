import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class HeavyBaton_151 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "TEF";
  public name: string = "Heavy Baton";
  public fullName: string = "Heavy Baton TEF 151";
  public text: string = "If the Pokémon this card is attached to has a Retreat Cost of exactly 4, is in the Active Spot, and is Knocked Out by damage from an attack from your opponent's Pokémon, move up to 3 Basic Energy cards from that Pokémon to your Benched Pokémon in any way you like. You may attach any number of Pokémon Tools to your Pokémon during your turn. You may attach only 1 Pokémon Tool to each Pokémon, and it stays attached.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
