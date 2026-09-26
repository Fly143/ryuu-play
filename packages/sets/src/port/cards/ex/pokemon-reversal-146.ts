import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PokMonReversal_146 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "EX";
  public name: string = "Pokémon Reversal";
  public fullName: string = "Pokémon Reversal EX 146";
  public text: string = "Choose 1 of your opponent's Benched Pokémon. Flip a coin. If heads, switch that Pokémon with the Defending Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "flipHeadsGustOpponent");
    }
    return state;
  }
}
