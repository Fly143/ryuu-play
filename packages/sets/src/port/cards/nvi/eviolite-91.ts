import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Eviolite_91 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "NVI";
  public name: string = "Eviolite";
  public fullName: string = "Eviolite NVI 91";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If the Pokémon this card is attached to is a Basic Pokémon, any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance). You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "reduceDamageMarker:20");
    }
    return state;
  }
}
