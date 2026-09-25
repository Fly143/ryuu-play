import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Brandon_151 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "PGO";
  public name: string = "Brandon";
  public fullName: string = "Brandon PGO 151";
  public text: string = "You can use this card only when it is the last card in your hand. Draw a card for each Benched Pokémon (both yours and your opponent's).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "drawPerOpponentBench:1");
    }
    return state;
  }
}
