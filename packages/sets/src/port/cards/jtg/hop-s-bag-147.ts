import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class HopSBag_147 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "JTG";
  public name: string = "Hop's Bag";
  public fullName: string = "Hop's Bag JTG 147";
  public text: string = "Search your deck for up to 2 Basic Hop's Pokémon and put them onto your Bench. Then, shuffle your deck. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
