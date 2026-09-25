import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class AwakeningDrum_141 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "TEF";
  public name: string = "Awakening Drum";
  public fullName: string = "Awakening Drum TEF 141";
  public text: string = "Draw a card for each of your Ancient Pokémon in play. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
