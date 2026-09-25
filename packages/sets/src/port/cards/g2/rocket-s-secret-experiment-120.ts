import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class RocketSSecretExperiment_120 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "G2";
  public name: string = "Rocket's Secret Experiment";
  public fullName: string = "Rocket's Secret Experiment G2 120";
  public text: string = "Flip a coin. If heads, search your deck for any card and put it into your hand. Shuffle your deck afterward. If tails, you can't play Trainer cards until the end of your next turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.searchToHand(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
