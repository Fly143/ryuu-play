import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class VentureBomb_93 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "TRR";
  public name: string = "Venture Bomb";
  public fullName: string = "Venture Bomb TRR 93";
  public text: string = "Flip a coin. If heads, put 1 damage counter on 1 of your opponent's Pokémon. If tails, put 1 damage counter on 1 of your Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
