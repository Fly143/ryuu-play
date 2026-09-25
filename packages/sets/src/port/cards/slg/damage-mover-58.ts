import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class DamageMover_58 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "SLG";
  public name: string = "Damage Mover";
  public fullName: string = "Damage Mover SLG 58";
  public text: string = "Move 3 damage counters from 1 of your Pokémon to another of your Pokémon. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
