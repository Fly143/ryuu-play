import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class LysandreSTrumpCard_118 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "PHF";
  public name: string = "Lysandre's Trump Card";
  public fullName: string = "Lysandre's Trump Card PHF 118";
  public text: string = "Each player shuffles all cards in his or her discard pile into his or her deck (except for Lysandre's Trump Card).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
