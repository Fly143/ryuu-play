import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TimeSpaceDistortion_124 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "MT";
  public name: string = "Time-Space Distortion";
  public fullName: string = "Time-Space Distortion MT 124";
  public text: string = "Flip 3 coins. For each heads, search your discard pile for a Pokémon, show it to your opponent, and put it into your hand.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
