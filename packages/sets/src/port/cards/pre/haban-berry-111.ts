import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class HabanBerry_111 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "PRE";
  public name: string = "Haban Berry";
  public fullName: string = "Haban Berry PRE 111";
  public text: string = "If the Pokémon this card is attached to is damaged by an attack from your opponent's Dragon Pokémon, it takes 60 less damage (after applying Weakness and Resistance), and discard this card. You may attach any number of Pokémon Tools to your Pokémon during your turn. You may attach only 1 Pokémon Tool to each Pokémon, and it stays attached.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "reduceDamageSelf:60");
    }
    return state;
  }
}
