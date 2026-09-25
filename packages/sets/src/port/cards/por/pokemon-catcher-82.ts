import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PokMonCatcher_82 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "POR";
  public name: string = "Pokémon Catcher";
  public fullName: string = "Pokémon Catcher POR 82";
  public text: string = "Flip a coin. If heads, switch in 1 of your opponent's Benched Pokémon to the Active Spot. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "flipHeadsGustOpponent");
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "flipHeadsGustOpponent");
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "flipHeadsGustOpponent");
    }
    return state;
  }
}
