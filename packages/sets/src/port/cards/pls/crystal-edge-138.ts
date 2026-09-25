import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class CrystalEdge_138 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "PLS";
  public name: string = "Crystal Edge";
  public fullName: string = "Crystal Edge PLS 138";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If this card is attached to White Kyurem-EX, each of its attacks does 50 more damage to the Active Pokémon (before applying Weakness and Resistance). You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "plusPowerMarker:50");
    }
    return state;
  }
}
