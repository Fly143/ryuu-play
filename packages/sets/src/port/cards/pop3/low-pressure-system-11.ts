import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class LowPressureSystem_11 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "POP3";
  public name: string = "Low Pressure System";
  public fullName: string = "Low Pressure System POP3 11";
  public text: string = "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card. Each Grass and Lightning Pokémon in play (both yours and your opponent's) gets +10 HP.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
