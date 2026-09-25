import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class NemonaSBackpack_83 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "PAF";
  public name: string = "Nemona's Backpack";
  public fullName: string = "Nemona's Backpack PAF 83";
  public text: string = "Put up to 2 Nemona cards from your discard pile into your hand. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
