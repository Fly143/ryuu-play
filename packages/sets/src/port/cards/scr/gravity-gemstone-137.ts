import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class GravityGemstone_137 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "SCR";
  public name: string = "Gravity Gemstone";
  public fullName: string = "Gravity Gemstone SCR 137";
  public text: string = "As long as the Pokémon this card is attached to is in the Active Spot, the Retreat Cost of both Active Pokémon is Colorless more. You may attach any number of Pokémon Tools to your Pokémon during your turn. You may attach only 1 Pokémon Tool to each Pokémon, and it stays attached.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
