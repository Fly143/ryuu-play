import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class EnergyRetrieval_116 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "SUM";
  public name: string = "Energy Retrieval";
  public fullName: string = "Energy Retrieval SUM 116";
  public text: string = "Put 2 basic Energy cards from your discard pile into your hand. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* recoverEnergyFromDiscard:2 */ state;
    }
    return state;
  }
}
