import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class CampingGear_122 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "SHF";
  public name: string = "Camping Gear";
  public fullName: string = "Camping Gear SHF 122";
  public text: string = "Search your deck for a card and put it into your hand. Then, shuffle your deck. Your turn ends. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
