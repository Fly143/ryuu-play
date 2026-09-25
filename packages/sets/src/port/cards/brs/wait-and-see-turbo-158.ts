import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class WaitAndSeeTurbo_158 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "BRS";
  public name: string = "Wait and See Turbo";
  public fullName: string = "Wait and See Turbo BRS 158";
  public text: string = "You can use this card only if you go second, and only during your first turn. Search your deck for a basic Energy card and attach it to 1 of your Pokémon. Then, shuffle your deck. Your turn ends. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "searchEnergyToSelf:1");
    }
    return state;
  }
}
