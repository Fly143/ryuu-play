import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class RoxanneGG66 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "CRZ";
  public name: string = "Roxanne";
  public fullName: string = "Roxanne CRZ GG66";
  public text: string = "You can use this card only if your opponent has 3 or fewer Prize cards remaining. Each player shuffles their hand into their deck. Then, you draw 6 cards, and your opponent draws 2 cards.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
