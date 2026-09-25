import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class JunkArm_87 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "TM";
  public name: string = "Junk Arm";
  public fullName: string = "Junk Arm TM 87";
  public text: string = "Discard 2 cards from your hand. Search your discard pile for a Trainer card, show it to your opponent, and put it into your hand. You can't choose Junk Arm with the effect of this card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
