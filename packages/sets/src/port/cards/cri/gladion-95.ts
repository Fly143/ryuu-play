import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Gladion_95 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "CRI";
  public name: string = "Gladion";
  public fullName: string = "Gladion CRI 95";
  public text: string = "Look at your face-down Prize cards and put 1 of them into your hand. Then, shuffle this Gladion into your remaining Prize cards and put them back face down. If you didn't play this Gladion from your hand, it does nothing.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
