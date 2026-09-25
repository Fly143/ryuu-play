import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class WondrousPatch_94 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "PFL";
  public name: string = "Wondrous Patch";
  public fullName: string = "Wondrous Patch PFL 94";
  public text: string = "Attach a Basic Psychic Energy card from your discard pile to 1 of your Benched Psychic Pokémon. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "attachBasicFromDiscard:1");
    }
    return state;
  }
}
