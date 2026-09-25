import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Faba_173 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "DRM";
  public name: string = "Faba";
  public fullName: string = "Faba DRM 173";
  public text: string = "Choose a Pokémon Tool or Special Energy card attached to 1 of your opponent's Pokémon, or any Stadium card in play, and put it in the Lost Zone.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
