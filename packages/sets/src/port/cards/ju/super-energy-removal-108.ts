import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class SuperEnergyRemoval_108 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "JU";
  public name: string = "Super Energy Removal";
  public fullName: string = "Super Energy Removal JU 108";
  public text: string = "Discard 1 Energy card attached to 1 of your own Pokémon in order to choose 1 of your opponent's Pokémon and up to 2 Energy cards attached to it. Discard those Energy cards.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "discardEnergyDefending:2");
    }
    return state;
  }
}
