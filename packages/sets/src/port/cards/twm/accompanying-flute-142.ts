import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class AccompanyingFlute_142 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "TWM";
  public name: string = "Accompanying Flute";
  public fullName: string = "Accompanying Flute TWM 142";
  public text: string = "Reveal the top 5 cards of your opponent's deck. You may choose any number of Basic Pokémon you find there and put those Pokémon onto their Bench. Your opponent shuffles the other cards back into their deck. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
