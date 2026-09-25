import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Evosoda_116 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "XY";
  public name: string = "Evosoda";
  public fullName: string = "Evosoda XY 116";
  public text: string = "Search your deck for a card that evolves from 1 of your Pokémon and put it onto that Pokémon. (This counts as evolving that Pokémon.) Shuffle your deck afterward. You can't use this card during your first turn or on a Pokémon that was put into play this turn. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* ascension */ state;
    }
    return state;
  }
}
