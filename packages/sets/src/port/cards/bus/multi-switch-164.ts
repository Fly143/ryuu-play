import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MultiSwitch_164 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "BUS";
  public name: string = "Multi Switch";
  public fullName: string = "Multi Switch BUS 164";
  public text: string = "Move an Energy from 1 of your Benched Pokémon to your Active Pokémon. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
