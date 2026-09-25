import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class LookerWhistle_127 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "UPR";
  public name: string = "Looker Whistle";
  public fullName: string = "Looker Whistle UPR 127";
  public text: string = "Search your deck for up to 2 cards named Looker, reveal them, and put them into your hand. Then, shuffle your deck. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
