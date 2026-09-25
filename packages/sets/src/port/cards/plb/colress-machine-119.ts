import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ColressMachine_119 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "PLB";
  public name: string = "Colress Machine";
  public fullName: string = "Colress Machine PLB 119";
  public text: string = "Search your deck for a Plasma Energy card and attach it to 1 of your Team Plasma Pokémon. Shuffle your deck afterward. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "searchEnergyToSelf:1");
    }
    return state;
  }
}
