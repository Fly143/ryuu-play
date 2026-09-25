import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Leftovers_163 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "MEW";
  public name: string = "Leftovers";
  public fullName: string = "Leftovers MEW 163";
  public text: string = "At the end of your turn, if the Pokémon this card is attached to is in the Active Spot, heal 20 damage from it. You may attach any number of Pokémon Tools to your Pokémon during your turn. You may attach only 1 Pokémon Tool to each Pokémon, and it stays attached.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "healSelfAfterAttack:20");
    }
    return state;
  }
}
