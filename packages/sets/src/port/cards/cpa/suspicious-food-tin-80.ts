import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class SuspiciousFoodTin_80 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "CPA";
  public name: string = "Suspicious Food Tin";
  public fullName: string = "Suspicious Food Tin CPA 80";
  public text: string = "Heal 80 damage from 1 of your Pokémon that has at least 1 Psychic Energy attached. If you healed any damage in this way, discard a Psychic Energy from it. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.healDamage(this, store, state, effect).playCard(effect as TrainerEffect, 80);
    }
    return state;
  }
}
