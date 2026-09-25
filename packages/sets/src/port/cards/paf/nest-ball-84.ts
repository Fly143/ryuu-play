import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class NestBall_84 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "PAF";
  public name: string = "Nest Ball";
  public fullName: string = "Nest Ball PAF 84";
  public text: string = "Search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
