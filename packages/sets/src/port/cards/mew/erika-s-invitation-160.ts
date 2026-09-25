import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ErikaSInvitation_160 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "MEW";
  public name: string = "Erika's Invitation";
  public fullName: string = "Erika's Invitation MEW 160";
  public text: string = "Your opponent reveals their hand, and you put a Basic Pokémon you find there onto your opponent's Bench. If you put a Pokémon onto their Bench in this way, switch in that Pokémon to the Active Spot.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "peekOpponentHand");
    }
    return state;
  }
}
