import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class QuickBall_114 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "MT";
  public name: string = "Quick Ball";
  public fullName: string = "Quick Ball MT 114";
  public text: string = "Reveal cards from your deck until you reveal a Pokémon. Show that Pokémon to your opponent and put it into your hand. Shuffle the other revealed cards back into your deck. (If you don't reveal a Pokémon, shuffle all the revealed cards back into your deck.)";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.searchToHand(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
