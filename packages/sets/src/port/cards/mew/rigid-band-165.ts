import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class RigidBand_165 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "MEW";
  public name: string = "Rigid Band";
  public fullName: string = "Rigid Band MEW 165";
  public text: string = "The Stage 1 Pokémon this card is attached to takes 30 less damage from attacks from your opponent's Pokémon (after applying Weakness and Resistance). You may attach any number of Pokémon Tools to your Pokémon during your turn. You may attach only 1 Pokémon Tool to each Pokémon, and it stays attached.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "reduceDamageSelf:30");
    }
    return state;
  }
}
