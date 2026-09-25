import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class RocketSTrickyGym_90 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "TRR";
  public name: string = "Rocket's Tricky Gym";
  public fullName: string = "Rocket's Tricky Gym TRR 90";
  public text: string = "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Each Pokémon with Dark or Rocket's in its name (both yours and your opponent's) can use attacks on this card instead of its own.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
