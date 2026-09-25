import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class RocketSHideout_87 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "TRR";
  public name: string = "Rocket's Hideout";
  public fullName: string = "Rocket's Hideout TRR 87";
  public text: string = "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Each Pokémon with Dark or Rocket's in its name (both yours and your opponent's) gets +20 HP.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
