import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TeamRocketSProton_208 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "ASC";
  public name: string = "Team Rocket's Proton";
  public fullName: string = "Team Rocket's Proton ASC 208";
  public text: string = "If you go first, you may use this card during your first turn. Search your deck for up to 3 Basic Team Rocket's Pokémon, reveal them, and put them into your hand. Then, shuffle your deck.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "searchBasicToBench:3");
    }
    return state;
  }
}
