import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class EnergyRetrieval_107 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "G2";
  public name: string = "Energy Retrieval";
  public fullName: string = "Energy Retrieval G2 107";
  public text: string = "Trade 1 of the other cards in your hand for up to 2 basic Energy cards from your discard pile.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* recoverEnergyFromDiscard:2 */ state;
    }
    return state;
  }
}
