import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Gardenia_149 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "UPR";
  public name: string = "Gardenia";
  public fullName: string = "Gardenia UPR 149";
  public text: string = "Heal 80 damage from 1 of your Pokémon that has any Grass Energy attached to it.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.healDamage(this, store, state, effect).playCard(effect as TrainerEffect, 80);
    }
    return state;
  }
}
