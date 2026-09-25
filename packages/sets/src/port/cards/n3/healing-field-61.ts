import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class HealingField_61 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "N3";
  public name: string = "Healing Field";
  public fullName: string = "Healing Field N3 61";
  public text: string = "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Once during each player's turn, he or she may flip a coin. If heads, that player removes 2 damage counters from his or her Active Pokémon (1 if it only has 1).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
