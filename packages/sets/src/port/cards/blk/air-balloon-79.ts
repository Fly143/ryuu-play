import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class AirBalloon_79 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "BLK";
  public name: string = "Air Balloon";
  public fullName: string = "Air Balloon BLK 79";
  public text: string = "The Retreat Cost of the Pokémon this card is attached to is ColorlessColorless less. You may attach any number of Pokémon Tools to your Pokémon during your turn. You may attach only 1 Pokémon Tool to each Pokémon, and it stays attached. Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "auraNoRetreatCost");
    }
    return state;
  }
}
