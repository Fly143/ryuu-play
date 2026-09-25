import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MiracleSphere_130 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "SK";
  public name: string = "Miracle Sphere β";
  public fullName: string = "Miracle Sphere β SK 130";
  public text: string = "Attach this card to 1 of your Evolved Fire, Water, or Psychic Pokémon in play. That Pokémon may use this card's attack instead of its own. At the end of your turn, discard Miracle Sphere β.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "copyAttack");
    }
    return state;
  }
}
