import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PokBlower_88 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "PL";
  public name: string = "Poké Blower +";
  public fullName: string = "Poké Blower + PL 88";
  public text: string = "You may play 2 Poké Blower + at the same time. If you play 1 Poké Blower +, flip a coin. If heads, put 1 damage counter on 1 of your opponent's Pokémon. If you play 2 Poké Blower +, choose 1 of your opponent's Benched Pokémon and switch it with 1 of your opponent's Active Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "putCountersEachOpponent:10");
    }
    return state;
  }
}
