import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class SabrinaSESP_117 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "G1";
  public name: string = "Sabrina's ESP";
  public fullName: string = "Sabrina's ESP G1 117";
  public text: string = "Attach Sabrina's ESP to 1 of your Pokémon with Sabrina in its name. At the end of your turn, discard Sabrina's ESP. If that Pokémon uses and attack that involves flipping coins, Sabrina's ESP lets you re-flip those coins once. If you do, re-flip all the coins.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
