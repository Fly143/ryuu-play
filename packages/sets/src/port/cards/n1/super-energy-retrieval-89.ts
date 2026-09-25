import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class SuperEnergyRetrieval_89 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "N1";
  public name: string = "Super Energy Retrieval";
  public fullName: string = "Super Energy Retrieval N1 89";
  public text: string = "Trade 2 of the other cards in your hand for 4 basic Energy cards from your discard pile. If you have fewer than 4 basic Energy cards there, take all of them.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
