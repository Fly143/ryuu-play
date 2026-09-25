import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class BrockSPewterCityGym_54 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "HIF";
  public name: string = "Brock's Pewter City Gym";
  public fullName: string = "Brock's Pewter City Gym HIF 54";
  public text: string = "Onix-GX (both yours and your opponent's) take 40 less damage from the opponent's attacks (after applying Weakness and Resistance). This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
