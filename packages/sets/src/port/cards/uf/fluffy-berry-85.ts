import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class FluffyBerry_85 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "UF";
  public name: string = "Fluffy Berry";
  public fullName: string = "Fluffy Berry UF 85";
  public text: string = "Attach Fluffy Berry to 1 of your Pokémon (excluding Pokémon-ex and Pokémon that has Dark or an owner in its name) that doesn't already have a Pokémon Tool attached to it. If the Pokémon Fluffy Berry is attached to is Pokémon-ex or has Dark or an owner in its name, discard Fluffy Berry. As long as Fluffy Berry is attached to a Pokémon, that Pokémon's Retreat Cost is 0.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "auraNoRetreatCost");
    }
    return state;
  }
}
