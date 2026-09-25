import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MiracleSphere_129 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "SK";
  public name: string = "Miracle Sphere α";
  public fullName: string = "Miracle Sphere α SK 129";
  public text: string = "Attach this card to 1 of your Evolved Fire, Lightning, or Fighting Pokémon in play. That Pokémon may use this card's attack instead of its own. At the end of your turn, discard Miracle Plate α.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
