import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class BabiriBerry_163 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "SSP";
  public name: string = "Babiri Berry";
  public fullName: string = "Babiri Berry SSP 163";
  public text: string = "If the Pokémon this card is attached to is damaged by an attack from your opponent's Metal Pokémon, it takes 60 less damage (after applying Weakness and Resistance), and discard this card. You may attach any number of Pokémon Tools to your Pokémon during your turn. You may attach only 1 Pokémon Tool to each Pokémon, and it stays attached. Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "reduceDamageSelf:60");
    }
    return state;
  }
}
