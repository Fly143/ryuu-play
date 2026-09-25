import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class StealthyHood_186 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "UNM";
  public name: string = "Stealthy Hood";
  public fullName: string = "Stealthy Hood UNM 186";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. Prevent all effects of your opponent's Abilities done to the Pokémon this card is attached to. Remove any such existing effects. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "preventEffectsMarker");
    }
    return state;
  }
}
