import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class CynthiaSPowerWeight_162 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "DRI";
  public name: string = "Cynthia's Power Weight";
  public fullName: string = "Cynthia's Power Weight DRI 162";
  public text: string = "The Cynthia's Pokémon this card is attached to gets +70 HP. You may attach any number of Pokémon Tools to your Pokémon during your turn. You may attach only 1 Pokémon Tool to each Pokémon, and it stays attached.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
