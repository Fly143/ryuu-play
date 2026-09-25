import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Xerosic_110 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "PHF";
  public name: string = "Xerosic";
  public fullName: string = "Xerosic PHF 110";
  public text: string = "Choose a Pokémon Tool or Special Energy card attached to a Pokémon in play (yours or your opponent's) and discard it.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "discardEnergyDefending:1");
    }
    return state;
  }
}
