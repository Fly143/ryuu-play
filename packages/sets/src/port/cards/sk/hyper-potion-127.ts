import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class HyperPotion_127 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "SK";
  public name: string = "Hyper Potion";
  public fullName: string = "Hyper Potion SK 127";
  public text: string = "Choose 1 of your Pokémon. Discard 1 or 2 basic Energy cards attached to that Pokémon. If you discarded 1 Energy card, remove up to 3 damage counters from that Pokémon. If you discarded 2 Energy cards, remove up to 5 damage counters from that Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "discardEnergySelf:1");
      return commonEffects.healDamage(this, store, state, effect).playCard(effect as TrainerEffect, 20);
    }
    return state;
  }
}
