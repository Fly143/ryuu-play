import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class RescueBoard_225 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "TWM";
  public name: string = "Rescue Board";
  public fullName: string = "Rescue Board TWM 225";
  public text: string = "The Retreat Cost of the Pokémon this card is attached to is Colorless less. If that Pokémon's remaining HP is 30 or less, it has no Retreat Cost. You may attach any number of Pokémon Tools to your Pokémon during your turn. You may attach only 1 Pokémon Tool to each Pokémon, and it stays attached. Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "auraNoRetreatCost");
    }
    return state;
  }
}
