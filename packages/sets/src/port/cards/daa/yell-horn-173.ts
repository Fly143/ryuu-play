import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class YellHorn_173 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "DAA";
  public name: string = "Yell Horn";
  public fullName: string = "Yell Horn DAA 173";
  public text: string = "Both Active Pokémon are now Confused. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
