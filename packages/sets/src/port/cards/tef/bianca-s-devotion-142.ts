import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class BiancaSDevotion_142 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "TEF";
  public name: string = "Bianca's Devotion";
  public fullName: string = "Bianca's Devotion TEF 142";
  public text: string = "Heal all damage from 1 of your Pokémon that has 30 HP or less remaining.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.healDamage(this, store, state, effect).playCard(effect as TrainerEffect, 999);
    }
    return state;
  }
}
