import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class LostCity_161 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "ASR";
  public name: string = "Lost City";
  public fullName: string = "Lost City ASR 161";
  public text: string = "Whenever a Pokémon (either yours or your opponent's) is Knocked Out, put that Pokémon in the Lost Zone instead of the discard pile. (Discard all attached cards.)";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
