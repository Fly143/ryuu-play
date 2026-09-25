import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MiracleSphere_131 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "SK";
  public name: string = "Miracle Sphere γ";
  public fullName: string = "Miracle Sphere γ SK 131";
  public text: string = "Attach this card to 1 of your Evolved Grass, Water, or Lightning Pokémon in play. That Pokémon may use this card's attack instead of its own. At the end of your turn, discard Miracle Sphere γ.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
