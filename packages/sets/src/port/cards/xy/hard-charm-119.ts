import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class HardCharm_119 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "XY";
  public name: string = "Hard Charm";
  public fullName: string = "Hard Charm XY 119";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. Any damage done to the Pokémon this card is attached to by an opponent's attack is reduced by 20 (after applying Weakness and Resistance). You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "reduceDamageSelf:20");
    }
    return state;
  }
}
