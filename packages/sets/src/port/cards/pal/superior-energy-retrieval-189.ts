import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class SuperiorEnergyRetrieval_189 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "PAL";
  public name: string = "Superior Energy Retrieval";
  public fullName: string = "Superior Energy Retrieval PAL 189";
  public text: string = "You can use this card only if you discard 2 other cards from your hand.Put up to 4 Basic Energy cards from your discard pile into your hand. (You can't choose a card you discarded with the effect of this card.) You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
