import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class LostVacuum_217 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "ASR";
  public name: string = "Lost Vacuum";
  public fullName: string = "Lost Vacuum ASR 217";
  public text: string = "You can use this card only if you put another card from your hand in the Lost Zone. Choose a Pokémon Tool attached to any Pokémon, or any Stadium in play, and put it in the Lost Zone. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
