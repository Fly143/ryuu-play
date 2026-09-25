import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class EnergyRestore_812 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "RS";
  public name: string = "Energy Restore";
  public fullName: string = "Energy Restore RS 81";
  public text: string = "Flip 3 coins. For each heads, put a Basic Energy card from your discard pile into your hand. If you don't have that many basic Energy cards in your discard pile, put all of them into your hand.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "recoverEnergyFromDiscard:2");
    }
    return state;
  }
}
