import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class EnhancedHammer_148 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "TWM";
  public name: string = "Enhanced Hammer";
  public fullName: string = "Enhanced Hammer TWM 148";
  public text: string = "Discard a Special Energy from 1 of your opponent's Pokémon. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "discardEnergyDefending:1");
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "discardEnergyDefending:1");
    }
    return state;
  }
}
