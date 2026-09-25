import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class NightlyGarbageRun_77 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "TR";
  public name: string = "Nightly Garbage Run";
  public fullName: string = "Nightly Garbage Run TR 77";
  public text: string = "Choose up to 3 Basic Pokémon cards, Evolution cards, and/or basic Energy cards from your discard pile. Show them to your opponent and shuffle them into your deck.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* shuffleCardsFromDiscardToDeck:3 */ state;
    }
    return state;
  }
}
