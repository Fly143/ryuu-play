import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class FullFlame_74 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "LM";
  public name: string = "Full Flame";
  public fullName: string = "Full Flame LM 74";
  public text: string = "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card. Put 4 damage counters instead of 2 on each Burned Pokémon between turns. The Special Condition Burned can't be removed by evolving or devolving the Burned Pokémon.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
