import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class SlumberingForest_207 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.STADIUM;
  public set: string = "CEC";
  public name: string = "Slumbering Forest";
  public fullName: string = "Slumbering Forest CEC 207";
  public text: string = "If a Pokémon is Asleep, its owner flips 2 coins instead of 1 for that Special Condition between turns. If either of them is tails, that Pokémon is still Asleep. This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
