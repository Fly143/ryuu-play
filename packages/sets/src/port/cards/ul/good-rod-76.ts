import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class GoodRod_76 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "UL";
  public name: string = "Good Rod";
  public fullName: string = "Good Rod UL 76";
  public text: string = "Flip a coin. If heads, search your discard pile for a Pokémon, show it to your opponent, and put it on top of your deck. If tails, search your discard pile for a Trainer card, show it to your opponent, and put it on top of your deck.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
