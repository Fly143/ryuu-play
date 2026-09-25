import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TicklingMachine_119 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "G1";
  public name: string = "Tickling Machine";
  public fullName: string = "Tickling Machine G1 119";
  public text: string = "Flip a coin. If heads, your opponent sets aside all the cards in his or her hand face down. Nobody may look at those cards. At the end of your opponent's next turn, your opponent puts those cards back into his or her hand. If tails, your turn ends immediately (you can't attack this turn).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
