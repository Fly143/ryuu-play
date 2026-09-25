import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class PokVitalA_62 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "SFA";
  public name: string = "Poké Vital A";
  public fullName: string = "Poké Vital A SFA 62";
  public text: string = "Heal 150 damage from 1 of your Pokémon. This card can't be put into your hand or deck from the discard pile. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.healDamage(this, store, state, effect).playCard(effect as TrainerEffect, 150);
    }
    return state;
  }
}
