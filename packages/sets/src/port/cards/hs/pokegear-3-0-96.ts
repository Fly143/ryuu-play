import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PokGear30_96 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "HS";
  public name: string = "Pokégear 3.0";
  public fullName: string = "Pokégear 3.0 HS 96";
  public text: string = "Look at the top 7 cards of your deck. Choose a Supporter card you find there, show it to your opponent, and put it into your hand. Shuffle the other cards back into your deck.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.searchToHand(this, store, state, effect).playCard(effect as TrainerEffect, 1);
      return commonEffects.searchToHand(this, store, state, effect).playCard(effect as TrainerEffect, 1);
      return commonEffects.searchToHand(this, store, state, effect).playCard(effect as TrainerEffect, 1);
    }
    return state;
  }
}
