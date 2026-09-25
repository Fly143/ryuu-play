import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class LuckyIcePop_150 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "CRE";
  public name: string = "Lucky Ice Pop";
  public fullName: string = "Lucky Ice Pop CRE 150";
  public text: string = "Heal 20 damage from your Active Pokémon. If you healed any damage in this way, flip a coin. If heads, put this Lucky Ice Pop into your hand instead of the discard pile. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.healDamage(this, store, state, effect).playCard(effect as TrainerEffect, 20);
    }
    return state;
  }
}
