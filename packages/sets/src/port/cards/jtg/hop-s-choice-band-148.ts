import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class HopSChoiceBand_148 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "JTG";
  public name: string = "Hop's Choice Band";
  public fullName: string = "Hop's Choice Band JTG 148";
  public text: string = "Attacks used by the Hop's Pokémon this card is attached to cost Colorless less and do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance). You may attach any number of Pokémon Tools to your Pokémon during your turn. You may attach only 1 Pokémon Tool to each Pokémon, and it stays attached.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "plusPowerMarker:30");
    }
    return state;
  }
}
