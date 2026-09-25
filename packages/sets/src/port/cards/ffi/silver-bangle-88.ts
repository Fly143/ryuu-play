import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class SilverBangle_88 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "FFI";
  public name: string = "Silver Bangle";
  public fullName: string = "Silver Bangle FFI 88";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. The attacks of the Pokémon this card is attached to (excluding Pokémon-EX) do 30 more damage to Active Pokémon-EX (before applying Weakness and Resistance). You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "plusPowerMarker:30");
    }
    return state;
  }
}
