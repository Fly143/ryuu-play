import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MetalCoreBarrier_180 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "UNM";
  public name: string = "Metal Core Barrier";
  public fullName: string = "Metal Core Barrier UNM 180";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If this card is attached to 1 of your Pokémon, discard it at the end of your opponent's turn. The Metal Pokémon this card is attached to takes 70 less damage from your opponent's attacks (after applying Weakness and Resistance). You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "reduceDamageMarker:70");
    }
    return state;
  }
}
