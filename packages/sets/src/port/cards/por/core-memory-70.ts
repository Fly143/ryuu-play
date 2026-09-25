import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class CoreMemory_70 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "POR";
  public name: string = "Core Memory";
  public fullName: string = "Core Memory POR 70";
  public text: string = "The Mega Zygarde ex this card is attached to can use the attack on this card. (You still need the necessary Energy to use this attack.) You may attach any number of Pokémon Tools to your Pokémon during your turn. You may attach only 1 Pokémon Tool to each Pokémon, and it stays attached.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "copyAttack");
    }
    return state;
  }
}
