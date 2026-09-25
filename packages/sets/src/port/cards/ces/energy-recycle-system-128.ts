import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class EnergyRecycleSystem_128 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "CES";
  public name: string = "Energy Recycle System";
  public fullName: string = "Energy Recycle System CES 128";
  public text: string = "Choose 1: • Put a basic Energy card from your discard pile into your hand. • Shuffle 3 basic Energy cards from your discard pile into your deck. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return /* shuffleCardsFromDiscardToDeck:3 */ state;
    }
    return state;
  }
}
