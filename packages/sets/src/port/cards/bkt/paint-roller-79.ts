import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PaintRoller_79 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "BKT";
  public name: string = "Paint Roller";
  public fullName: string = "Paint Roller BKT 79";
  public text: string = "Discard any Stadium card in play. Then, draw a card. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
