import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class RocketSHideout_63 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "N3";
  public name: string = "Rocket's Hideout";
  public fullName: string = "Rocket's Hideout N3 63";
  public text: string = "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Each Pokémon in play with Dark in its name (even your opponent's) gets +20 HP.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
