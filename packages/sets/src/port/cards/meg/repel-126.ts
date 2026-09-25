import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Repel_126 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "MEG";
  public name: string = "Repel";
  public fullName: string = "Repel MEG 126";
  public text: string = "Switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.) You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
