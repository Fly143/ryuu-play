import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class EnergyRetrieval_82 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "WHT";
  public name: string = "Energy Retrieval";
  public fullName: string = "Energy Retrieval WHT 82";
  public text: string = "Put up to 2 Basic Energy cards from your discard pile into your hand. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* recoverEnergyFromDiscard:2 */ state;
    }
    return state;
  }
}
