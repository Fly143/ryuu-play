import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class DefianceVest_162 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "PAR";
  public name: string = "Defiance Vest";
  public fullName: string = "Defiance Vest PAR 162";
  public text: string = "If you have more Prize cards remaining than your opponent, the Pokémon this card is attached to takes 40 less damage from attacks from your opponent's Pokémon (after applying Weakness and Resistance). You may attach any number of Pokémon Tools to your Pokémon during your turn. You may attach only 1 Pokémon Tool to each Pokémon, and it stays attached.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "reduceDamageSelf:40");
    }
    return state;
  }
}
