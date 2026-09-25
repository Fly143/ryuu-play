import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Ghetsis_101 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "FLF";
  public name: string = "Ghetsis";
  public fullName: string = "Ghetsis FLF 101";
  public text: string = "Your opponent reveals his or her hand and shuffles all Item cards found there into his or her deck. Then, draw a number of cards equal to the number of Item cards your opponent shuffled into his or her deck.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
