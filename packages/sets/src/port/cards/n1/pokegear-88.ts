import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PokGear_88 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "N1";
  public name: string = "PokéGear";
  public fullName: string = "PokéGear N1 88";
  public text: string = "Look at the top 7 cards of your deck. If any of them are Trainer cards, you may show 1 of them to your opponent and put it into your hand. Shuffle your deck afterward. You can't play any more Trainer cards this turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
