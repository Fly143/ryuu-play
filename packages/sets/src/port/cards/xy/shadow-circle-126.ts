import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class ShadowCircle_126 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "XY";
  public name: string = "Shadow Circle";
  public fullName: string = "Shadow Circle XY 126";
  public text: string = "Each Pokémon that has any Darkness Energy attached to it (both yours and your opponent's) has no Weakness. This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "noWeakness");
    }
    return state;
  }
}
