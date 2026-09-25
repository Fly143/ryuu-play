import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class AromaLady_199 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "CRE";
  public name: string = "Aroma Lady";
  public fullName: string = "Aroma Lady CRE 199";
  public text: string = "Draw 2 cards. If you do, your Active Pokémon recovers from all Special Conditions.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.drawCards(this, store, state, effect).playCard(effect as TrainerEffect, 2);
    }
    return state;
  }
}
