import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class EggIncubator_87 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "PGO";
  public name: string = "Egg Incubator";
  public fullName: string = "Egg Incubator PGO 87";
  public text: string = "Flip a coin. If heads, search your deck for a Basic Pokémon, put it onto your Bench, and shuffle your deck. If tails, put this Egg Incubator on the bottom of your deck instead of in the discard pile. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
