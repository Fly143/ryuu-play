import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class EnergyReturner_74 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "UL";
  public name: string = "Energy Returner";
  public fullName: string = "Energy Returner UL 74";
  public text: string = "Search your discard pile for 4 basic Energy cards, show them to your opponent, and shuffle them into your deck.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
