import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class AncientCrystal_118 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "UPR";
  public name: string = "Ancient Crystal";
  public fullName: string = "Ancient Crystal UPR 118";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. The Regirock, Regice, Registeel, or Regigigas this card is attached to takes 30 less damage from your opponent's attacks (after applying Weakness and Resistance). You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "reduceDamageMarker:30");
    }
    return state;
  }
}
