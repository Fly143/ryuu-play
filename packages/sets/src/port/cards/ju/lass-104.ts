import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Lass_104 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "JU";
  public name: string = "Lass";
  public fullName: string = "Lass JU 104";
  public text: string = "You and your opponent show each other your hands, then shuffle all the Trainer cards from your hands into your decks.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* lassShuffleTrainers */ state;
    }
    return state;
  }
}
