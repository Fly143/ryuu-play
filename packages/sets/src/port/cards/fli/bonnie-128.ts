import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Bonnie_128 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "FLI";
  public name: string = "Bonnie";
  public fullName: string = "Bonnie FLI 128";
  public text: string = "You can play this card only if there is any Stadium card in play. Discard that Stadium card. During this turn, your Zygarde-GX can use its GX attack even if you have used your GX attack.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
