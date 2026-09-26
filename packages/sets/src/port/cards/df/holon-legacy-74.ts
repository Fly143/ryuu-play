import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class HolonLegacy_74 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "DF";
  public name: string = "Holon Legacy";
  public fullName: string = "Holon Legacy DF 74";
  public text: string = "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card. Each Pokémon in play that has δ on its card (both yours and your opponent's) has no Weakness and can't use any Poké-Powers.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "noPowers");
    }
    return state;
  }
}
