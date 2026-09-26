import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MtMoon_94 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "RG";
  public name: string = "Mt. Moon";
  public fullName: string = "Mt. Moon RG 94";
  public text: string = "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Any Pokémon (both yours and your opponent's) with maximum HP less than 70 can't use any Poké-Powers.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "noPowers");
    }
    return state;
  }
}
