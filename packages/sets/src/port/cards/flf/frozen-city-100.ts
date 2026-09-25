import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class FrozenCity_100 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "FLF";
  public name: string = "Frozen City";
  public fullName: string = "Frozen City FLF 100";
  public text: string = "Whenever any player attaches an Energy from his or her hand to 1 of his or her Pokémon (excluding Team Plasma Pokémon) put 2 damage counters on that Pokémon. This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.runTrainerOp(this, store, state, effect).playCard(effect as TrainerEffect, "roughSkin");
    }
    return state;
  }
}
