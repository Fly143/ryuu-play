import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MegatonBlower_182 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "SSP";
  public name: string = "Megaton Blower";
  public fullName: string = "Megaton Blower SSP 182";
  public text: string = "Discard all Pokémon Tools and Special Energy from all of your opponent's Pokémon, and discard a Stadium in play. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "discardStadium");
    }
    return state;
  }
}
