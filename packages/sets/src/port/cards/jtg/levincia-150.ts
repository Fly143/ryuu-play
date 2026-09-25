import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Levincia_150 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "JTG";
  public name: string = "Levincia";
  public fullName: string = "Levincia JTG 150";
  public text: string = "Once during each player's turn, that player may put up to 2 Basic Lightning Energy cards from their discard pile into their hand.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
