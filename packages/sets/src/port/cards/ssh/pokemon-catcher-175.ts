import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PokMonCatcher_175 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "SSH";
  public name: string = "Pokémon Catcher";
  public fullName: string = "Pokémon Catcher SSH 175";
  public text: string = "Flip a coin. If heads, switch 1 of your opponent's Benched Pokémon with their Active Pokémon. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "flipHeadsGustOpponent");
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "flipHeadsGustOpponent");
    }
    return state;
  }
}
