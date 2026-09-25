import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PokMonCatcher_105 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "GEN";
  public name: string = "Pokémon Catcher";
  public fullName: string = "Pokémon Catcher GEN 105";
  public text: string = "Flip a coin. If heads, switch 1 of your opponent's Benched Pokémon with his or her Active Pokémon. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "flipHeadsGustOpponent");
    }
    return state;
  }
}
