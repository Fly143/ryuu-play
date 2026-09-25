import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TechnicalMachineTS1_136 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "SF";
  public name: string = "Technical Machine TS-1";
  public fullName: string = "Technical Machine TS-1 SF 136";
  public text: string = "Attach this card to 1 of your Pokémon in play. That Pokémon may use this card's attack instead of its own.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "copyAttack");
    }
    return state;
  }
}
