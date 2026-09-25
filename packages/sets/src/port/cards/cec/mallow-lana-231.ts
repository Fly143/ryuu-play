import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MallowLana_231 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "CEC";
  public name: string = "Mallow & Lana";
  public fullName: string = "Mallow & Lana CEC 231";
  public text: string = "Switch your Active Pokémon with 1 of your Benched Pokémon. When you play this card, you may discard 2 other cards from your hand. If you do, heal 120 damage from the Pokémon you moved to your Bench.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
