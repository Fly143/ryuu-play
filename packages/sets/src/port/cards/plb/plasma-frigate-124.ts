import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PlasmaFrigate_124 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "PLB";
  public name: string = "Plasma Frigate";
  public fullName: string = "Plasma Frigate PLB 124";
  public text: string = "Each Pokémon that has any Plasma Energy attached to it (both yours and your opponent's) has no Weakness. This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "noWeakness");
    }
    return state;
  }
}
