import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Repel_130 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "SUM";
  public name: string = "Repel";
  public fullName: string = "Repel SUM 130";
  public text: string = "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
