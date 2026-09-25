import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ExpeditionUniform_137 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "BST";
  public name: string = "Expedition Uniform";
  public fullName: string = "Expedition Uniform BST 137";
  public text: string = "Look at the bottom 3 cards of your deck and put them on top of your deck in any order. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
