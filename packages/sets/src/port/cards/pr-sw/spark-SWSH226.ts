import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class SparkSWSH226 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "PR-SW";
  public name: string = "Spark";
  public fullName: string = "Spark PR-SW SWSH226";
  public text: string = "Draw 2 cards. If you drew any cards in this way, flip a coin. If heads, attach a Lightning Energy card from your discard pile to 1 of your Benched Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "attachBasicFromDiscard:1");
    }
    return state;
  }
}
