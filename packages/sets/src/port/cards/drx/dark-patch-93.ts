import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class DarkPatch_93 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "DRX";
  public name: string = "Dark Patch";
  public fullName: string = "Dark Patch DRX 93";
  public text: string = "Attach a basic Darkness Energy card from your discard pile to 1 of your Benched Darkness Pokémon. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "attachBasicFromDiscard:1");
    }
    return state;
  }
}
