import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Rose_71 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "SHF";
  public name: string = "Rose";
  public fullName: string = "Rose SHF 71";
  public text: string = "Attach up to 2 basic Energy cards from your discard pile to 1 of your Pokémon VMAX. If you attached any Energy cards in this way, discard your hand.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
