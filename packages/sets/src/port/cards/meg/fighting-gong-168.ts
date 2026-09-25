import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class FightingGong_168 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "MEG";
  public name: string = "Fighting Gong";
  public fullName: string = "Fighting Gong MEG 168";
  public text: string = "Search your deck for a Basic Fighting Energy card or a Basic Fighting Pokémon, reveal it, and put it into your hand. Then, shuffle your deck. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.searchToHand(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
