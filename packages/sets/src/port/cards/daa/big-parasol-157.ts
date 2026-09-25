import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class BigParasol_157 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "DAA";
  public name: string = "Big Parasol";
  public fullName: string = "Big Parasol DAA 157";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached. As long as the Pokémon this card is attached to is in the Active Spot, prevent all effects of attacks from your opponent's Pokémon done to all of your Pokémon. (Existing effects are not removed. Damage is not an effect.) You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "preventEffectsMarker");
    }
    return state;
  }
}
