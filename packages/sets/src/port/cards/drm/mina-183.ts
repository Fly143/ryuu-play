import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Mina_183 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "DRM";
  public name: string = "Mina";
  public fullName: string = "Mina DRM 183";
  public text: string = "Search your deck for a Fairy Energy card and attach it to 1 of your Pokémon. Then, shuffle your deck.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "searchEnergyToSelf:1");
    }
    return state;
  }
}
