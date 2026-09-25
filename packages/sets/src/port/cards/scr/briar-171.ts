import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Briar_171 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "SCR";
  public name: string = "Briar";
  public fullName: string = "Briar SCR 171";
  public text: string = "You can use this card only if your opponent has exactly 2 Prize cards remaining. During this turn, if your opponent's Active Pokémon is Knocked Out by damage from an attack used by your Tera Pokémon, take 1 more Prize card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "plusPrize:1");
    }
    return state;
  }
}
