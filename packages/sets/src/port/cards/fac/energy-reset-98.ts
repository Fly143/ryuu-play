import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class EnergyReset_98 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "FAC";
  public name: string = "Energy Reset";
  public fullName: string = "Energy Reset FAC 98";
  public text: string = "Put as many Energy attached to your Pokémon as you like into your hand. You may play as many Item cards as you like during your turn (before your attack).";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      /* structural */
    }
    return state;
  }
}
