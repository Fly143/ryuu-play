import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TagSwitch_254 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "CEC";
  public name: string = "Tag Switch";
  public fullName: string = "Tag Switch CEC 254";
  public text: string = "Move up to 2 Energy from 1 of your TAG TEAM Pokémon to another of your Pokémon. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
