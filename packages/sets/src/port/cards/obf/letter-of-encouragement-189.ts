import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class LetterOfEncouragement_189 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "OBF";
  public name: string = "Letter of Encouragement";
  public fullName: string = "Letter of Encouragement OBF 189";
  public text: string = "You can use this card only if any of your Pokémon were Knocked Out during your opponent's last turn. Search your deck for up to 3 Basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.searchToHand(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
