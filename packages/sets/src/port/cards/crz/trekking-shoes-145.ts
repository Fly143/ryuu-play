import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TrekkingShoes_145 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "CRZ";
  public name: string = "Trekking Shoes";
  public fullName: string = "Trekking Shoes CRZ 145";
  public text: string = "Look at the top card of your deck. You may put that card into your hand. If you don't, discard that card and draw a card. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "pokedex");
    }
    return state;
  }
}
