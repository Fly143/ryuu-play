import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class BuddyBuddyPoffin_223 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "TWM";
  public name: string = "Buddy-Buddy Poffin";
  public fullName: string = "Buddy-Buddy Poffin TWM 223";
  public text: string = "Search your deck for up to 2 Basic Pokémon with 70 HP or less and put them onto your Bench. Then, shuffle your deck. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
