import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ProfessorOakSHint_84 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "EVO";
  public name: string = "Professor Oak's Hint";
  public fullName: string = "Professor Oak's Hint EVO 84";
  public text: string = "Draw cards until you have 7 cards in your hand. Your turn ends.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.drawUntilHand(this, store, state, effect).playCard(effect as TrainerEffect, 7);
    }
    return state;
  }
}
