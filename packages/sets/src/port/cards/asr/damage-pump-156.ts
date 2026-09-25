import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class DamagePump_156 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "ASR";
  public name: string = "Damage Pump";
  public fullName: string = "Damage Pump ASR 156";
  public text: string = "Move up to 2 damage counters from 1 of your Pokémon to your other Pokémon in any way you like. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
