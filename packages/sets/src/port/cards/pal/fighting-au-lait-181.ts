import {
  Effect,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class FightingAuLait_181 extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set: string = "PAL";
  public name: string = "Fighting Au Lait";
  public fullName: string = "Fighting Au Lait PAL 181";
  public text: string = "You can use this card only if you have more Prize cards remaining than your opponent.Heal 60 damage from 1 of your Pokémon. You may play any number of Item cards during your turn.";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      return commonEffects.healDamage(this, store, state, effect).playCard(effect as TrainerEffect, 60);
    }
    return state;
  }
}
