import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class LowPressureSystem_86 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "DR";
  public name: string = "Low Pressure System";
  public fullName: string = "Low Pressure System DR 86";
  public text: string = "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Each Grass and Lightning Pokémon in play (both yours and your opponent's) gets +10 HP.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
