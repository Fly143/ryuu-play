import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class FieldBlower_125 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "GRI";
  public name: string = "Field Blower";
  public fullName: string = "Field Blower GRI 125";
  public text: string = "Choose up to 2 in any combination of Pokémon Tool cards and Stadium cards in play (yours or your opponent's) and discard them. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "discardOpponentTools:2");
    }
    return state;
  }
}
