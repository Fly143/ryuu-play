import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class CounterGain_186 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "ASC";
  public name: string = "Counter Gain";
  public fullName: string = "Counter Gain ASC 186";
  public text: string = "If you have more Prize cards remaining than your opponent, attacks used by the Pokémon this card is attached to cost Colorless less. You may attach any number of Pokémon Tools to your Pokémon during your turn. You may attach only 1 Pokémon Tool to each Pokémon, and it stays attached.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
