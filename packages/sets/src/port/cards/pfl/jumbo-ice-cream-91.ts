import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class JumboIceCream_91 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "PFL";
  public name: string = "Jumbo Ice Cream";
  public fullName: string = "Jumbo Ice Cream PFL 91";
  public text: string = "Heal 80 damage from your Active Pokémon that has 3 or more Energy attached. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
