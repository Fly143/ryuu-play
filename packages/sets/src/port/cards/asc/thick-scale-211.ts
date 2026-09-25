import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ThickScale_211 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "ASC";
  public name: string = "Thick Scale";
  public fullName: string = "Thick Scale ASC 211";
  public text: string = "The Dragon Pokémon this card is attached to takes 50 less damage from attacks from your opponent's Grass, Fire, Water, or Lightning Pokémon (after applying Weakness and Resistance). You may attach any number of Pokémon Tools to your Pokémon during your turn. You may attach only 1 Pokémon Tool to each Pokémon, and it stays attached.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "reduceDamageSelf:50");
    }
    return state;
  }
}
