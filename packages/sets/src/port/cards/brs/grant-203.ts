import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Grant_203 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "BRS";
  public name: string = "Grant";
  public fullName: string = "Grant BRS 203";
  public text: string = "During this turn, your Fighting Pokémon's attacks do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance). During your turn, if this Grant is in your discard pile, you may discard 2 cards, except any Grant, from your hand. If you do, put this Grant into your hand. (This effect doesn't use up your Supporter card for the turn.)";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "plusPowerMarker:30");
    }
    return state;
  }
}
