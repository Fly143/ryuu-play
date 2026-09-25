import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Volo_169 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "ASR";
  public name: string = "Volo";
  public fullName: string = "Volo ASR 169";
  public text: string = "Discard 1 of your Benched Pokémon V and all attached cards.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "discardBench:1");
    }
    return state;
  }
}
