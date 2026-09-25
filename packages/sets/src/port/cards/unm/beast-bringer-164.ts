import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class BeastBringer_164 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.TOOL;
  public set: string = "UNM";
  public name: string = "Beast Bringer";
  public fullName: string = "Beast Bringer UNM 164";
  public text: string = "Attach a Pokémon Tool to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If you have exactly 6 Prize cards remaining, and if your opponent's Active Pokémon-GX or Pokémon-EX is Knocked Out by damage from an attack of the Ultra Beast this card is attached to, take 1 more Prize card. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "plusPrize:1");
    }
    return state;
  }
}
