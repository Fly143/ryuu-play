import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TheRocketSTrap_19 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "G1";
  public name: string = "The Rocket's Trap";
  public fullName: string = "The Rocket's Trap G1 19";
  public text: string = "Flip a coin. If heads, choose up to 3 cards at random from your opponent's hand (don't look at them). Your opponent shuffles those cards into his or her deck.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
