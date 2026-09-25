import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class AntheaConcordia_182 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "ASC";
  public name: string = "Anthea & Concordia";
  public fullName: string = "Anthea & Concordia ASC 182";
  public text: string = "You can use this card only if you have N's Darmanitan, N's Zoroark ex, N's Vanilluxe, N's Klinklang, N's Reshiram, and N's Zekrom in play. During this turn, if your opponent's Active Pokémon is Knocked Out by damage from an attack used by your N's Pokémon, take 3 more Prize cards.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "plusPrize:3");
    }
    return state;
  }
}
