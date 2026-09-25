import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class DizzyingValley_88 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "PFL";
  public name: string = "Dizzying Valley";
  public fullName: string = "Dizzying Valley PFL 88";
  public text: string = "Confused Pokémon (both yours and your opponent's) don't recover from that Special Condition when they evolve or devolve.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
