import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class SurfingBeach_114 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "CRI";
  public name: string = "Surfing Beach";
  public fullName: string = "Surfing Beach CRI 114";
  public text: string = "Once during each player's turn, that player may switch their Active Water Pokémon with 1 of their Benched Water Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
