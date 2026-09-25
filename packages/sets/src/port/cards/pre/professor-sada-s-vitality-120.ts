import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ProfessorSadaSVitality_120 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "PRE";
  public name: string = "Professor Sada's Vitality";
  public fullName: string = "Professor Sada's Vitality PRE 120";
  public text: string = "Choose up to 2 of your Ancient Pokémon and attach a Basic Energy card from your discard pile to each of them. If you attached any Energy in this way, draw 3 cards.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "attachBasicFromDiscardToBench:2");
    }
    return state;
  }
}
