import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class EnergyRecycleSystem_81 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "UF";
  public name: string = "Energy Recycle System";
  public fullName: string = "Energy Recycle System UF 81";
  public text: string = "Search your discard pile for basic Energy cards. You may either show 1 basic Energy card to your opponent and put it into your hand, or show 3 basic Energy cards to your opponent and shuffle them into your deck.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
