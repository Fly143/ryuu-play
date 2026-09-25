import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Avery_187 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "BST";
  public name: string = "Avery";
  public fullName: string = "Avery BST 187";
  public text: string = "Draw 3 cards. If you drew any cards in this way, your opponent discards Pokémon from their Bench until they have 3.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.drawCards(this, store, state, effect).playCard(effect as TrainerEffect, 3);
    }
    return state;
  }
}
