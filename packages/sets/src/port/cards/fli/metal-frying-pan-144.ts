import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MetalFryingPan_144 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "FLI";
  public name: string = "Metal Frying Pan";
  public fullName: string = "Metal Frying Pan FLI 144";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. The Metal Pokémon this card is attached to takes 30 less damage from your opponent's attacks (after applying Weakness and Resistance) and has no Weakness. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "reduceDamageMarker:30");
    }
    return state;
  }
}
