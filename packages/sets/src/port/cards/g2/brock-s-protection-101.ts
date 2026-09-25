import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class BrockSProtection_101 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "G2";
  public name: string = "Brock's Protection";
  public fullName: string = "Brock's Protection G2 101";
  public text: string = "Attach Brock's Protection to 1 of your Pokémon with Brock in its name. Energy cards attached to that Pokémon can't be removed by your opponent's attacks or Trainer cards. (This doesn't stop the rest of the attack or Trainer card from working normally.)";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
