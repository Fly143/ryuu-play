import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ArcadeGame_83 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "N1";
  public name: string = "Arcade Game";
  public fullName: string = "Arcade Game N1 83";
  public text: string = "Shuffle your deck, then reveal the top 3 cards of it. If at least 2 of those cards share the same name, put all the ones with that name into your hand and shuffle the rest into your deck. If none of them do, shuffle all 3 into your deck.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
