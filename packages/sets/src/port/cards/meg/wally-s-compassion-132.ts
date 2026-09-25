import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class WallySCompassion_132 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.SUPPORTER;
  public set: string = "MEG";
  public name: string = "Wally's Compassion";
  public fullName: string = "Wally's Compassion MEG 132";
  public text: string = "Heal all damage from 1 of your Mega Evolution Pokémon ex. If you healed any damage in this way, put all Energy attached to that Pokémon into your hand.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.healDamage(this, store, state, effect).playCard(effect as TrainerEffect, 999);
    }
    return state;
  }
}
