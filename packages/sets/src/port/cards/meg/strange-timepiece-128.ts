import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class StrangeTimepiece_128 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "MEG";
  public name: string = "Strange Timepiece";
  public fullName: string = "Strange Timepiece MEG 128";
  public text: string = "Devolve 1 of your evolved Psychic Pokémon by putting any number of Evolution cards on it into your hand. (That Pokémon can't evolve this turn.) You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
