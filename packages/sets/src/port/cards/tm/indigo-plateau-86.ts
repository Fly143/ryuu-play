import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class IndigoPlateau_86 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "TM";
  public name: string = "Indigo Plateau";
  public fullName: string = "Indigo Plateau TM 86";
  public text: string = "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card. Each Pokémon LEGEND in play (both yours and your opponent's) gets +30 HP.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
