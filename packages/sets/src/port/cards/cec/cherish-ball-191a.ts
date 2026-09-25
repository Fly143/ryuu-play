import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class CherishBall_191a extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "CEC";
  public name: string = "Cherish Ball";
  public fullName: string = "Cherish Ball CEC 191a";
  public text: string = "Search your deck for a Pokémon-GX, reveal it, and put it into your hand. Then, shuffle your deck. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.searchToHand(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
