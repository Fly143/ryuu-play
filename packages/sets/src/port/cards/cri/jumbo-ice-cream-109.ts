import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class JumboIceCream_109 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "CRI";
  public name: string = "Jumbo Ice Cream";
  public fullName: string = "Jumbo Ice Cream CRI 109";
  public text: string = "Heal 80 damage from your Active Pokémon that has 3 or more Energy attached.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
