import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ProfessorOakSSetup_201 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "CEC";
  public name: string = "Professor Oak's Setup";
  public fullName: string = "Professor Oak's Setup CEC 201";
  public text: string = "Search your deck for up to 3 Basic Pokémon of different types and put them onto your Bench. Then, shuffle your deck.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "searchBasicToBench:3");
    }
    return state;
  }
}
