import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class UrnOfVitality_229 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "BST";
  public name: string = "Urn of Vitality";
  public fullName: string = "Urn of Vitality BST 229";
  public text: string = "Shuffle up to 2 Single Strike Energy cards from your discard pile into your deck. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
