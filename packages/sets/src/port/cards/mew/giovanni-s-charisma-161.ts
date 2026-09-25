import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class GiovanniSCharisma_161 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "MEW";
  public name: string = "Giovanni's Charisma";
  public fullName: string = "Giovanni's Charisma MEW 161";
  public text: string = "Put an Energy attached to your opponent's Active Pokémon into their hand. If you do, attach an Energy card from your hand to your Active Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "discardEnergyDefending:1");
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "attachBasicFromHandToBench:1");
    }
    return state;
  }
}
