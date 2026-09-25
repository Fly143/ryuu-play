import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PokMonMarch_102 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "N1";
  public name: string = "Pokémon March";
  public fullName: string = "Pokémon March N1 102";
  public text: string = "Your opponent may search his or her deck for 1 Basic Pokémon card and put it onto his or her Bench. Then, you may search your deck for 1 Basic Pokémon card and put it onto your Bench. Then, each player shuffles his or her deck. (A player can't do any of this if his or her Bench is full.)";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
